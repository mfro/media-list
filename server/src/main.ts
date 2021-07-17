import WebSocket from 'ws';
import { host } from '@mfro/simpledata/server';
import { model } from 'common';

const port = process.argv[2] ? parseInt(process.argv[2]) : 8081;
const server = new WebSocket.Server({
  port,
});

host(model, server);
