const express = require('express');
const auth = require('../config/middleware/authMiddleware');
const user_typeVerify = require('../config/middleware//verifyUsertype.js');
const controller = require('../controller/category.controller.js');

const cat = express.Router();

cat.get('/',controller.getCategory);
cat.get('/:id',controller.getCategoryById);

cat.use(auth);
cat.use(user_typeVerify('admin'));

cat.post('/',controller.createCategory);
cat.put('/:id',controller.updateCategory);
cat.delete('/:id',controller.deleteCategory);

module.exports = cat;