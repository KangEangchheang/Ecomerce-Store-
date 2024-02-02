const express = require('express');
const controller = require('../../controller/auth/register.controller.js')

const auth = express.Router();

auth.post('/', controller.register);

module.exports = auth;