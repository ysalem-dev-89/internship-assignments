import mongoose from 'mongoose';
import ProductInterface from '../interfaces/ProductInterface';

const productSchema = new mongoose.Schema<ProductInterface>({
  title: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  description: String,
  image: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Product = mongoose.model<ProductInterface>('Product', productSchema);

export default Product;
