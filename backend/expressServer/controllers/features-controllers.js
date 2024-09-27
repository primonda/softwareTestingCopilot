import { v4 as uuid } from 'uuid';
import { getAllfeaturesQuery, addfeatureQuery, getfeatureQuery, updatefeatureQuery, deletefeatureQuery } from '../dbQueries/featuresQueries.js';
import { HttpError } from '../models/http-error.js';
import { validationResult } from 'express-validator';

export const getAllfeatures = async (req, res, next) => {
    try {
        const response = await getAllfeaturesQuery(req.params.pid);
        console.log(response);
        if(response.length === 0){
          return next(new HttpError('feature not found', 404));
        }
        res.status(200).json(response);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const addfeature = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return next(new HttpError('Invalid inputs passed, please check your data', 400));
        }
        const {title, description} = req.body;
        const addedfeature = {
            title,
            description
        }
        const response = await addfeatureQuery(req.params.pid, addedfeature);
        console.log(response);
        res.status(201).json(addedfeature);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
  }

  export const getfeature = async (req, res, next) => {
    try {
        const response = await getfeatureQuery(req.params.fid, req.params.pid);
        res.status(200).json(response[0]);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

  export const updatefeature = async (req, res, next) => {
    try {
        const getfeatureresponse = await getfeatureQuery(req.params.fid, req.params.pid);
        if(getfeatureresponse.length === 0){
            return next(new HttpError('feature not found'), 400);
        }
        getfeatureresponse[0].title = req.body.title !== undefined ? req.body.title : getfeatureresponse[0].title;
        getfeatureresponse[0].description = req.body.description !== undefined ? req.body.description : getfeatureresponse[0].description;
        const response = await updatefeatureQuery(getfeatureresponse[0], req.params.pid);
        res.status(202).json(getfeatureresponse[0]);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
  }

  export const deletefeature = async (req, res, next) => {
    try {
        await deletefeatureQuery(req.params.fid);
        res.status(200).json("feature deleted");
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
  }