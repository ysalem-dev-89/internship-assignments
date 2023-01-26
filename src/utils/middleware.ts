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
  });
};
