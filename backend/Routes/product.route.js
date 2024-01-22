const express = require('express');
const controller = require('../controller/product.controller.js');

const prod = express.Router();

prod.get('/',controller.getProduct);
prod.get('/:id',controller.getProductById);
prod.post('/',controller.createProduct);
prod.put('/:id',controller.updateProduct);
prod.delete('/:id',controller.deleteProduct);

module.exports = prod;