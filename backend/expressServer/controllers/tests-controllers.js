import { v4 as uuid } from 'uuid';
import { getAllTestsOfProductQuery, getAllTestsOfFeatureQuery, addTestQuery, getTestQuery, updateTestQuery, deleteTestQuery } from '../dbQueries/testsQueries.js';
import { HttpError } from '../models/http-error.js';
import { validationResult } from 'express-validator';

export const getAllProductTests = async (req, res, next) => {
    try {
        const response = await getAllTestsOfProductQuery(req.params.pid);
        console.log(response);
        if(response.length === 0){
          return next(new HttpError('Tests not found', 404));
        }
        res.status(200).json(response);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const getAllFeatureTests = async (req, res, next) => {
    try {
        const response = await getAllTestsOfFeatureQuery(req.params.fid);
        console.log(response);
        if(response.length === 0){
          return next(new HttpError('Tests not found', 404));
        }
        res.status(200).json(response);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const addTest = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return next(new HttpError('Invalid inputs passed, please check your data', 400));
        }
        const {pid, title, description, git_action_link} = req.body;
        const addedTest = {
            pid,
            title,
            description,
            git_action_link
        }
        const response = await addTestQuery(req.params.fid, addedTest);
        console.log(response);
        res.status(201).json(addedTest);
    } catch (error) {
        console.log(error);
        return next(new HttpError('Internal Server Error', 500));
    }
  }

  export const getTest = async (req, res, next) => {
    try {
        const response = await getTestQuery(req.params.tid);
        res.status(200).json(response[0]);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

  export const updateTest = async (req, res, next) => {
    try {
        const getTestresponse = await getTestQuery(req.params.tid);
        if(getTestresponse.length === 0){
            return next(new HttpError('Test not found'), 400);
        }
        getTestresponse[0].title = req.body.title !== undefined ? req.body.title : getTestresponse[0].title;
        getTestresponse[0].description = req.body.description !== undefined ? req.body.description : getTestresponse[0].description;
        getTestresponse[0].git_action_link = req.body.git_action_link !== undefined ? req.body.git_action_link : getTestresponse[0].git_action_link;
        const response = await updateTestQuery(getTestresponse[0], req.params.tid);
        res.status(202).json(getTestresponse[0]);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
  }

  export const deleteTest = async (req, res, next) => {
    try {
        await deleteTestQuery(req.params.tid);
        res.status(200).json("feature deleted");
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
  }