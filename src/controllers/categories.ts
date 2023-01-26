import { Response, NextFunction, Request } from 'express';
import Category from '../models/Category';

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find({});

    res.json({
      status: 200,
      message: 'Success',
      totalCount: categories.length,
      items: categories
    });
  } catch (error: unknown) {
    next(error);
  }
};
