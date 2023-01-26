import { Types } from 'mongoose';

export default interface ProductInterface {
  id: string;
  title: string;
  description?: string;
  image?: string;
  price: number;
  category: Types.ObjectId;
}
