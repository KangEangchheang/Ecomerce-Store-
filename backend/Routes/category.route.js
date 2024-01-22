const express = require('express');
const controller = require('../controller/category.controller.js');

const cat = express.Router();

cat.get('/',controller.getCategory);
cat.get('/:id',controller.getCategoryById);
cat.post('/',controller.createCategory);
cat.put('/:id',controller.updateCategory);
cat.delete('/:id',controller.deleteCategory);

module.exports = cat;