require('dotenv').config();
const crypto = require('crypto');

//we dont use this, i just keep it just incase we need it

const secretKey = async ()=>{
  return process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');
}
module.exports = {
  secretKey
};