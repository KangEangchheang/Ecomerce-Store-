const express = require('express');
const controller = require('../controller/supplier.controller.js');

const sup = express.Router();

sup.get('/',controller.getSupplier);
sup.get('/id/:id',controller.getSupplierById);
sup.get('/name/:name', controller.getSupplyByName)
sup.post('/',controller.createSupplier);
sup.put('/:id',controller.updateSupplier);
sup.delete('/:id',controller.deleteSupplier);

module.exports = sup;