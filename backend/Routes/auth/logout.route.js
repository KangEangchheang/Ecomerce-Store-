const express = require('express');
const controller = require('../../controller/auth/logout.controller.js')

const logout = express.Router();

logout.get('/:id', controller.logout);

module.exports = logout;