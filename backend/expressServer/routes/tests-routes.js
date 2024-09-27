import express from 'express';
import { getAllProductTests, getAllFeatureTests, addTest, updateTest, deleteTest, getTest} from '../controllers/tests-controllers.js';
import { check } from 'express-validator';

export const router = express.Router();

router.get('/productId/:pid/allTests', getAllProductTests);

router.get('/featureId/:fid/allTests', getAllFeatureTests);

router.post(
    '/featureId/:fid/addTest', 
    [
        check('title').not().isEmpty(), 
        check('description').not().isEmpty()
    ],
    addTest);

router.get('/:tid', getTest);

router.patch('/:tid', updateTest);

router.delete('/:tid', deleteTest);