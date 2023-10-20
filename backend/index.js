const {PORT} = require('./config');
const authRoute = require('./Routes/authRoute');
const express = require('express');
const cors = require('cors');
const app = express();

//app.use is for creating middleware for api
app.use(express.json());// parse json when sending data
app.use(cors());//browswer policy 

//route for auth
app.use('/auth',authRoute);


app.listen(PORT,()=>{
    console.log("server running");
});