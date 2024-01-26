const express = require('express');
const controller = require('../../controller/auth/login.controller.js')

const auth = express.Router();

auth.post('/login', controller.getLogin);

module.exports = auth;