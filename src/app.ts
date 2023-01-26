import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import 'express-async-errors';
import * as logger from './utils/logger';
import config from './utils/config';
import * as middleware from './utils/middleware';
import router from './routes/router';
import { join } from 'path';

const app = express();

logger.info('connecting to', `${config.MONGO_URI}`);

mongoose
  .connect(`${config.MONGO_URI}`)
  .then(() => logger.info('connected to MongoDB'))
  .catch(error => logger.error("'error connection to MongoDB:", error.message));

app.use(express.json());
app.use(
  cors({
    origin: config.client.origin,
    credentials: true // access-control-allow-credentials:true
  })
);
app.use(express.static('build'));
app.use(middleware.requestLogger);

app.use('/api/v1/', router);
if (config.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(middleware.unKnownEndpoint);
app.use(middleware.errorHandler);

export default app;
