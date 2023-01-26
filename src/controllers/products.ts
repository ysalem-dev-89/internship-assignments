import { Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import ProductRequest from 'interfaces/ProductRequest';
import Product from '../models/Product';
import Category from '../models/Category';
import GenericError from '../utils/GenericError';

export const getProducts = async (
  req: ProductRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category = '', sort = '' } = req.query;
    let query = {};

    // Note: I should use packages like yup OR joy for validation here
    // but I am trying to implement validation in different ways.
    // I used yup in signup validation
    if (category) {
      const categoryParams = category.split(',');
      categoryParams.forEach(param => {
        if (!mongoose.Types.ObjectId.isValid(param)) {
          throw new GenericError(
            'category filter contains invalid Object ID',
            400
          );
        }
      });
      query = { category: { $in: [...categoryParams] } };
    }

    const sortObject: [string, mongoose.SortOrder][] = [];
    if (sort) {
      const sortParams = sort.split(',');
      sortParams.forEach(param => {
        const [sortKey, sortValue] = param.split(':');

        if (
          !(
            ['title', 'price'].includes(sortKey.trim()) &&
            ['desc', 'descending', -1, 1, 'asc', 'ascending'].includes(
              sortValue.trim()
            )
          )
        ) {
          throw new GenericError('Sort params are not valid', 400);
        }
        sortObject.push([sortKey, sortValue === 'desc' ? -1 : 1]);
      });
    }

    const page = parseInt(req.query.page || '') || 1;
    const limit = parseInt(req.query.limit || '') || 10;
    const skip = (page - 1) * limit;

    const count = await Product.count(query);
    const products = await Product.find(query)
      .sort(sortObject)
      .skip(skip)
      .limit(limit)
      .populate('category', { name: 1 }, Category);

    res.json({
      status: 200,
      message: 'Success',
      totalCount: count,
      items: products
    });
  } catch (error: unknown) {
    next(error);
  }
};
