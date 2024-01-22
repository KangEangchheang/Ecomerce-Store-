const express = require('express');
const controller = require('../controller/discount.controller.js');

const dis = express.Router();

dis.get('/',controller.getDiscount);
dis.get('/:id',controller.getDiscountById);
dis.post('/',controller.createDiscount);
dis.put('/:id',controller.updateDiscount);
dis.delete('/:id',controller.deleteDiscount);

module.exports = dis;