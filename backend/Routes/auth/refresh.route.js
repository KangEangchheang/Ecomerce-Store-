const express = require('express');
const controller = require('../../controller/auth/refresh.controller.js');
const refresh = express.Router();


refresh.get('/', controller.refresh);

module.exports = refresh;