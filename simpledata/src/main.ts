import fsModule, { promises as fs, stat } from 'fs';
import path from 'path';
import { IncomingMessage } from 'http';

import WebSocket from 'ws';
import git from 'isomorphic-git';
import * as jsonpatch from 'fast-json-patch';
import { assert } from '@mfro/ts-common/assert';

const dataDir = 'data';
const active = new Map<string, StateEntry>();
let latestHash: string;

interface StateEntry {
  doc: any;
  sockets: Set<WebSocket>;
}

interface Update {
  base: string;
  patch: jsonpatch.Operation[];
}

async function handleConnection(socket: WebSocket, request: IncomingMessage) {
  assert(request.url != null, 'url');

  assert(request.url[0] == '/', 'url');
  const code = request.url.slice(1);
  assert(/^[\w-]+$/.test(code), 'url');

  let state = active.get(code);
  try {
    const filePath = path.join(dataDir, code);

    if (!state) active.set(code, state = {
      doc: await loadFile(filePath),
      sockets: new Set,
    });
  } catch (e) {
    console.log(`not found: ${code}`)
    return socket.close();
  }

  state.sockets.add(socket);
  socket.send(JSON.stringify({
    base: latestHash,
    patch: jsonpatch.compare({}, state.doc),
  }));

  socket.on('message', async data => {
    assert(state != null, 'state');
    assert(typeof data == 'string', 'data');

    const update: Update = JSON.parse(data);
    if (update.base != latestHash) return socket.close();

    await applyUpdate(code, state.doc, update);

    for (const other of state.sockets) {
      if (other == socket) {
        other.send(JSON.stringify({
          base: latestHash,
        }));
      } else {
        other.send(JSON.stringify({
          base: latestHash,
          patch: update.patch,
        }));
      }
    }
  });

  socket.on('close', e => {
    assert(state != null, 'state');

    state.sockets.delete(socket);
    if (state.sockets.size == 0) {
      active.delete(code);
    }
  });
}

loadLatestHash().then(hash => {
  latestHash = hash;

  const port = process.argv[2] ? parseInt(process.argv[2]) : 8081;
  const server = new WebSocket.Server({
    port,
  });

  server.on('connection', handleConnection);
});

async function makeCommit(fileName: string) {
  await git.add({
    fs: fsModule, dir: dataDir,
    filepath: fileName,
  });

  return await git.commit({
    fs: fsModule, dir: dataDir,
    message: 'test',
    author: {
      name: 'simpledata',
      email: 'simpledata@mfro.me',
    },
  });
}

async function loadLatestHash() {
  const log = await git.log({
    fs: fsModule, dir: dataDir,
    depth: 1,
  });

  return log[0].oid;
}

async function loadFile(filePath: string) {
  const raw = await fs.readFile(filePath);
  const str = raw.toString('utf8');
  return JSON.parse(str);
}

async function saveFile(filePath: string, value: object) {
  const str = JSON.stringify(value, undefined, '  ');
  const raw = Buffer.from(str, 'utf8');
  await fs.writeFile(filePath, raw);
}

async function applyUpdate(fileName: string, value: object, update: Update) {
  assert(update.base == latestHash, 'hash mismatch');

  const filePath = path.join(dataDir, fileName);

  jsonpatch.applyPatch(value, update.patch);
  await saveFile(filePath, value);

  const status = await git.status({
    fs: fsModule, dir: dataDir,
    filepath: fileName,
  });

  latestHash = status == 'unmodified'
    ? await loadLatestHash()
    : await makeCommit(fileName);
}
