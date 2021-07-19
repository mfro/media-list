import WebSocket from 'ws';
import { host } from '@mfro/simpledata/server';
import { model } from 'common';
import { readFileSync } from 'fs';

interface Config {
  port: number;
  dataDir: string;
}

const config: Config = JSON.parse(readFileSync('config.json', 'utf8'));

const server = new WebSocket.Server({
  port: config.port,
});

host(model, server, config.dataDir);
