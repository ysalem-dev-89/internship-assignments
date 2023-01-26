import { NextFunction, Request, Response } from 'express';
import * as logger from './logger';
import GenericError from './GenericError';

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info('Method: ', req.method);
  logger.info('Path: ', req.path);
  logger.info('Body: ', req.body);
  logger.info('----');
  next();
};

export const unKnownEndpoint = (req: Request, res: Response) => {
  res.status(404).json({ error: 'unknown endpoint' });
};

// export const errorHandler = (
//   error: unknown,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const exception = error as GenericError;

//   logger.error(exception.message);

//   if (exception.name === 'CastError') {
//     return res.status(400).json({ error: 'malformatted id' });
//   } else if (exception.name === 'ValidationError') {
//     return res.status(400).json({ error: exception.message });
//   } else if (exception.name === 'JsonWebTokenError') {
//     return res.status(401).json({ error: 'invalid token' });
//   } else if (exception.name === 'TokenExpiredError') {
//     return res.status(401).json({ error: 'token expired' });
//   }
//   next(error);
// };

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const exception = err as GenericError;
  console.log('exception...', exception.message, 'status', exception.status);
  res.status(exception.status || 500).json({
    statusCode: exception.status || 500,
    error: exception.message
    // exception.name === 'GenericError'
    //   ? exception.message
    //   : 'Internal Server Error'
  });
};
