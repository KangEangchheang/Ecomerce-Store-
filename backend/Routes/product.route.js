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

//get related product in product detail
prod.get('/related/:name',controller.getRelatedProduct);

//get newest sort product
prod.get('/newproduct', controller.getNewProducts);
prod.get('/newestproduct', controller.getNewestProducts);
prod.get('/newestfeature', controller.getNewestFeatureProduct);
prod.get('/newestcategory/:name',controller.getNewestProductByCategoryName);
module.exports = prod;