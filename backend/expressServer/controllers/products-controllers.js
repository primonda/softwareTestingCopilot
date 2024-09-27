import { v4 as uuid } from 'uuid';
import { getAllProductsQuery, addProductQuery, getProductQuery, updateProductQuery, deleteProductQuery } from '../dbQueries/productsQueries.js';
import { HttpError } from '../models/http-error.js';
import { validationResult } from 'express-validator';

export const getAllProducts = async (req, res, next) => {
    try {
        const response = await getAllProductsQuery(req.params.tid);
        console.log(response);
        if(response.length === 0){
          return next(new HttpError('tenant not found', 404));
        }
        res.status(200).json(response);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

export const addProduct = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return next(new HttpError('Invalid inputs passed, please check your data', 400));
        }
        const {title, description} = req.body;
        const addedProduct = {
            title,
            description
        }
        const response = await addProductQuery(req.params.tid, addedProduct);
        console.log(response);
        res.status(201).json(addedProduct);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
  }

  export const getProduct = async (req, res, next) => {
    try {
        const response = await getProductQuery(req.params.tid, req.params.pid);
        res.status(200).json(response[0]);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
}

  export const updateProduct = async (req, res, next) => {
    try {
        const getProductresponse = await getProductQuery(req.params.tid, req.params.pid);
        if(getProductresponse.length === 0){
            return next(new HttpError('Product not found'), 400);
        }
        getProductresponse[0].title = req.body.title !== undefined ? req.body.title : getProductresponse[0].title;
        getProductresponse[0].description = req.body.description !== undefined ? req.body.description : getProductresponse[0].description;
        const response = await updateProductQuery(getProductresponse[0], req.params.pid);
        res.status(202).json(getProductresponse[0]);
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
  }

  export const deleteProduct = async (req, res, next) => {
    try {
        await deleteProductQuery(req.params.pid);
        res.status(200).json("product deleted");
    } catch (error) {
        return next(new HttpError('Internal Server Error', 500));
    }
  }