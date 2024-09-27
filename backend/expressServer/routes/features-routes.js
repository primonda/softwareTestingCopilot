import express from 'express';
import { getAllfeatures, addfeature, updatefeature, deletefeature, getfeature } from '../controllers/features-controllers.js';
import { check } from 'express-validator';

export const router = express.Router();

router.get('/productId/:pid/allFeatures', getAllfeatures);

router.post(
    '/productId/:pid/addfeature', 
    [
        check('title').not().isEmpty(), 
        check('description').not().isEmpty()
    ],
    addfeature);

router.get('/productId/:pid/feature/:fid', getfeature);

router.patch('/productId/:pid/feature/:fid', updatefeature);

router.delete('/productId/:pid/feature/:fid', deletefeature);