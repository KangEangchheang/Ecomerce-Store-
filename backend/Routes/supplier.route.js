const express = require('express');
const controller = require('../controller/supplier.controller.js');
const auth = require('../config/middleware/authMiddleware');
const user_typeVerify = require('../config/middleware//verifyUsertype.js');

const sup = express.Router();

sup.get('/',controller.getSupplier);
sup.get('/id/:id',controller.getSupplierById);
sup.get('/name/:name', controller.getSupplyByName);

sup.use(auth);
sup.use(user_typeVerify('admin'));

sup.post('/',controller.createSupplier);
sup.put('/:id',controller.updateSupplier);
sup.delete('/:id',controller.deleteSupplier);

module.exports = sup;