require('dotenv').config();
const crypto = require('crypto');

module.exports = {
  secretKey: process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex'),
};