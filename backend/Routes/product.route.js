const express = require('express');
const controller = require('../controller/product.controller.js');
const auth = require('../config/middleware/authMiddleware');
const user_typeVerify = require('../config/middleware//verifyUsertype.js');

const prod = express.Router();

prod.get('/',controller.getProduct);
prod.get('/category/:name',controller.getProductByCategoryName);
prod.get('/id/:id',controller.getProductById);
prod.get('/name/:name',controller.getProductByName);
prod.get('/feature',controller.getFeature);

//get related product in product detail
prod.get('/related/:name',controller.getRelatedProduct);

//get newest sort product
prod.get('/newproduct', controller.getNewProducts);
prod.get('/newestproduct', controller.getNewestProducts);
prod.get('/newestfeature', controller.getNewestFeatureProduct);
prod.get('/newestcategory/:name',controller.getNewestProductByCategoryName);

prod.use(auth);
prod.use(user_typeVerify('admin'));

prod.post('/',controller.createProduct);
prod.put('/:id',controller.updateProduct);
prod.delete('/:id',controller.deleteProduct);

module.exports = prod;