const express = require('express');
const {user} = require('../models/userModel');

const auth = express.Router();

auth.get('/login', async(req,res)=>{
    console.log(user);
    return res.status(200).send('<h1>Hello world</h1>');
});


module.exports = auth;