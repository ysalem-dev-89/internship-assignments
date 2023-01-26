import { Router } from 'express';
import * as categoryController from '../controllers/categories';
import * as productController from '../controllers/products';
import * as userController from '../controllers/users';

const router = Router();

router.get('/products', productController.getProducts);
router.get('/categories', categoryController.getCategories);
router.get('/users', userController.getUsers);
router.post('/users', userController.signup);

export default router;
