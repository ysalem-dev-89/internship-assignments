import http from 'http';
import app from './app';
import config from './utils/config';
import { info } from './utils/logger';

const server = http.createServer(app);

server.listen(config.PORT, () => {
  info(`Listening to server on port ${config.PORT}`);
});
