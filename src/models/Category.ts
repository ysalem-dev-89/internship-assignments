import mongoose from 'mongoose';
import CategoryInterface from '../interfaces/CateogryInterface';

const categorySchema = new mongoose.Schema<CategoryInterface>({
  name: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

categorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export default mongoose.model<CategoryInterface>('Category', categorySchema);
