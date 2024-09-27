import express from 'express';
import { getAllProducts, addProduct, updateProduct, deleteProduct, getProduct } from '../controllers/products-controllers.js';
import { check } from 'express-validator';

export const router = express.Router();

router.get('/tenantId/:tid/allProducts', getAllProducts);

router.post(
    '/tenantId/:tid/addProduct', 
    [
        check('title').not().isEmpty(), 
        check('description').not().isEmpty()
    ],
    addProduct);

router.get('/tenantId/:tid/product/:pid', getProduct);

router.patch('/tenantId/:tid/product/:pid', updateProduct);

router.delete('/tenantId/:tid/product/:pid', deleteProduct);