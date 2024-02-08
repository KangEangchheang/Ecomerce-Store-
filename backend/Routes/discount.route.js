const express = require('express');
const dis = express.Router();
const auth = require('../config/middleware/authMiddleware');
const user_typeVerify = require('../config/middleware//verifyUsertype.js');

const controller = require('../controller/discount.controller.js');


dis.get('/',controller.getDiscount);
dis.get('/id/:id',controller.getDiscountById);
dis.get('/active',controller.getActiveDiscounts)

dis.use(auth);
dis.use(user_typeVerify('admin'));

dis.post('/',controller.createDiscount);
dis.put('/:id',controller.updateDiscount);
dis.delete('/:id',controller.deleteDiscount);

module.exports = dis;