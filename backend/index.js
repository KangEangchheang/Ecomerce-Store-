const express = require('express');
const app = express();

//app.use is for creating middleware for api
app.use(express.json());// parse json when sending data
app.use(cors());//browswer policy 