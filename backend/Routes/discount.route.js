const express = require('express');
const dis = express.Router();
const bodyParser = require('body-parser');

const controller = require('../controller/discount.controller.js');
const verifyToken = require('../config/middleware/authMiddleware.js');
dis.use(bodyParser.json());
dis.use(verifyToken);

dis.get('/',controller.getDiscount);
dis.get('/id/:id',controller.getDiscountById);
dis.post('/',controller.createDiscount);
dis.put('/:id',controller.updateDiscount);
dis.delete('/:id',controller.deleteDiscount);
dis.get('/active',controller.getActiveDiscounts)

module.exports = dis;