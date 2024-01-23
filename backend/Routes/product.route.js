const express = require('express');
const controller = require('../controller/product.controller.js');

const prod = express.Router();

prod.get('/',controller.getProduct);
prod.get('/category/:name',controller.getProductByCategoryName);
prod.get('/id/:id',controller.getProductById);
prod.get('/name/:name',controller.getProductByName);
prod.post('/',controller.createProduct);
prod.put('/:id',controller.updateProduct);
prod.delete('/:id',controller.deleteProduct);
prod.get('/feature',controller.getFeature);
// prod.get('/g1',controller.get1Product);
prod.get('/newproduct', controller.getNewProducts);
module.exports = prod;