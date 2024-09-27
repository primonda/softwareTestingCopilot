import express from 'express.js';

export const router = express.Router();

router.get('/tenant/:tid', (req, res, next) => {
    const tenantId = req.param.tenantId;
});