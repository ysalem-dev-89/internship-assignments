import { Types } from 'mongoose';

export default interface CategoryInterface {
  id: string;
  name: string;
  products?: Types.ObjectId[];
}
