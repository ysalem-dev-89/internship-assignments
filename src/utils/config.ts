import dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV, ORIGIN } = process.env;

const MONGO_URI =
  NODE_ENV == 'test' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI;

const config = {
  NODE_ENV,
  PORT: PORT || 4000,
  MONGO_URI: MONGO_URI,
  client: {
    origin: ORIGIN || 'http://localhost:3000'
  }
};

export default config;
