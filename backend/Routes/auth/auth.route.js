const express = require('express');
const controller = require('../../controller/auth/auth.controller.js');
const auth = express.Router();


auth.post('/', controller.login);

module.exports = auth;