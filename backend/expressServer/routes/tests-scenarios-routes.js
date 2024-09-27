import express from 'express';
import { getAllProductTestsScenarios, getAllFeatureTestsScenarios, addTestScenario, updateTestScenario, deleteTestScenario, getTestScenario, generateTestScenarios, generateTestScenarioCode} from '../controllers/tests-scenarios-controllers.js';
import { check } from 'express-validator';

export const router = express.Router();

router.get('/productId/:pid/allTestsScenarios', getAllProductTestsScenarios);

router.get('/featureId/:fid/allTestsScenarios', getAllFeatureTestsScenarios);

router.post(
    '/featureId/:fid/addTest', 
    [
        check('title').not().isEmpty(), 
        check('description').not().isEmpty()
    ],
    addTestScenario);

router.post('/featureId/:fid/generateTestScenarios', generateTestScenarios);

router.get('/:tid', getTestScenario);

router.get('/:tid/getTestScenarioCode', generateTestScenarioCode);

router.patch('/:tid', updateTestScenario);

router.delete('/:tid', deleteTestScenario);