import { Request } from 'express';

export default interface ProductRequest extends Request {
  query: {
    category?: string;
    sort?: string;
    page?: string;
    limit?: string;
  };
}
