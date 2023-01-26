import Product from '../models/Product';
import Category from '../models/Category';
import productsJSON from './seeds/products.json';
import categoriesJSON from './seeds/categories.json';
import config from '../utils/config';
import mongoose from 'mongoose';

(async () => {
  try {
    await mongoose.connect(`${config.MONGO_URI}`);
    await Category.deleteMany({});
    const categories = categoriesJSON.map(c => {
      return {
        name: c
      };
    });
    await Category.insertMany(categories);

    await Product.deleteMany({});

    productsJSON.forEach(async p => {
      const category = await Category.findOne({ name: p.category });

      const product = new Product({
        title: p.title,
        description: p.description,
        price: p.price,
        category: category?._id,
        image: p.images[p.images.length - 1]
      });
      await product.save();
      console.log('Database is built successfully');
    });
  } catch (error) {
    console.log(error);
  }
})();
