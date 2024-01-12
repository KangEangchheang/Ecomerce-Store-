const express = require('express');
const product = require('../models/productModel.js');

const prod = express.Router();
prod.get('/feature', async(req,res)=>{
    const feature = [product,product,product,product,product,product,product,product,product,product,product,product,product,product];
    return res.status(200).send(feature);
});
module.exports = prod;