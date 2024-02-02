require('dotenv').config();
const crypto = require('crypto');

const secretKey = async ()=>{
  return process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');
}
module.exports = {
  secretKey
};