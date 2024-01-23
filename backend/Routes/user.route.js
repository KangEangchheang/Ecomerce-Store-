const express = require('express');
const controller = require("../controller/user.controller.js");

const user = express.Router();

user.get('/', controller.getUser);
user.post('/', controller.createUser);
user.get('/name/:name', controller.getUserByName);
user.get('/id/:id', controller.getUserById);
user.put('/:id', controller.updateUser);
user.delete("/:id", controller.deleteUser);

module.exports = user;