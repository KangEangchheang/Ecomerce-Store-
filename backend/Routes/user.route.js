const express = require('express');
const controller = require("../controller/user.controller.js");
const verify = require('../config/middleware/authMiddleware');
const user_typeVerify = require('../config/middleware//verifyUsertype.js');

const user = express.Router();
user.use(verify);

user.get('/', controller.getUser);
user.get('/id/:id', controller.getUserById);

user.put('/:id',user_typeVerify(['admin','user']), controller.updateUser);//this is only for user to update their data in setting and only able to update normal data
//need to create another update user for admin dashboard where we can furthur edit user data

user.use(user_typeVerify('admin'));

user.get('/name/:name', controller.getUserByName);
user.delete("/:id", controller.deleteUser);
user.post('/', controller.createUser);

module.exports = user;