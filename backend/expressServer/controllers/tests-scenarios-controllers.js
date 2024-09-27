import { v4 as uuid } from 'uuid';
import { getAllTestsScenariosOfProductQuery, getAllTestsScenariosOfFeatureQuery, addTestScenarioQuery, getTestScenarioQuery, updateTestScenarioQuery, deleteTestScenarioQuery } from '../dbQueries/testsScenariosQueries.js';
import { HttpError } from '../models/http-error.js';
import { validationResult } from 'express-validator';
import { getTestScenarios, getTestScenarioCode } from '../helpers/generateTestCases.js';

export const getAllProductTestsScenarios = async (req, res, next) => {
    try {
        const response = await getAllTestsScenariosOfProductQuery(req.params.pid);
        console.log(response);
        if(response.length === 0){
          return next(new HttpError('Tests not found', 404));
        }
        res.status(200).json(response);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const getAllFeatureTestsScenarios = async (req, res, next) => {
    try {
        const response = await getAllTestsScenariosOfFeatureQuery(req.params.fid);
        console.log(response);
        // if(response.length === 0){
        //   return next(new HttpError('Tests not found', 404));
        // }
        res.status(200).json(response);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const addTestScenario = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return next(new HttpError('Invalid inputs passed, please check your data', 400));
        }
        const {pid, scenario, test_steps, expected_output, git_action_link} = req.body;
        const addedTest = {
            pid,
            scenario,
            test_steps,
            expected_output,
            git_action_link
        }
        const response = await addTestScenarioQuery(req.params.fid, addedTest);
        console.log(response);
        res.status(201).json(addedTest);
    } catch (error) {
        console.log(error);
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const getTestScenario = async (req, res, next) => {
    try {
        const response = await getTestScenarioQuery(req.params.tid);
        res.status(200).json(response[0]);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const updateTestScenario = async (req, res, next) => {
    try {
        const getTestresponse = await getTestScenarioQuery(req.params.tid);
        if(getTestresponse.length === 0){
            return next(new HttpError('Test not found'), 400);
        }
        getTestresponse[0].scenario = req.body.scenario !== undefined ? req.body.scenario : getTestresponse[0].scenario;
        getTestresponse[0].test_steps = req.body.test_steps !== undefined ? req.body.test_steps : getTestresponse[0].test_steps;
        getTestresponse[0].expected_output = req.body.expected_output !== undefined ? req.body.expected_output : getTestresponse[0].expected_output;
        getTestresponse[0].git_action_link = req.body.git_action_link !== undefined ? req.body.git_action_link : getTestresponse[0].git_action_link;
        const response = await updateTestQuery(getTestresponse[0], req.params.tid);
        res.status(202).json(getTestresponse[0]);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const deleteTestScenario = async (req, res, next) => {
    try {
        await deleteTestScenarioQuery(req.params.tid);
        res.status(200).json("feature deleted");
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const generateTestScenarios = async (req, res, next) => {
    try{
        const {pid, product_title, product_description, feature_title, feature_description} = req.body;
        const testScenarios = await getTestScenarios(product_title, product_description, feature_title, feature_description);
        const response = [];
        for( let testScenario of testScenarios){
            const {scenario, pre_requisite, test_steps, expected_output} = testScenario;
            const addedTest = {
                    pid,
                    scenario,
                    pre_requisite,
                    test_steps,
                    expected_output,
                    git_action_link: null
                }
            console.log(addedTest);
            await addTestScenarioQuery(req.params.fid, addedTest);
            response.push(addedTest);
        }
        res.status(201).json(response);
    } catch (error){
        console.log(error)
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const generateTestScenarioCode = async (req, res, next) => {
    try{
        const response = await getTestScenarioQuery(req.params.tid);
        const {scenario, lang, framework} = response;
        console.log("response",response);
        const testScenarios = await getTestScenarioCode(response[0], "Java Script", "Palywright");
        res.status(200).json(testScenarios);
    } catch (error){
        console.log(error)
        return next(new HttpError('Internal Server Error', 500));
    }
}
