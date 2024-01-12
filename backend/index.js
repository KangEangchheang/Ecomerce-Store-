const {PORT} = require('./config');
const authRoute = require('./Routes/authRoute');
const path = require('path');
const productRoute = require('./Routes/productRoute');
const express = require('express');
const cors = require('cors');
const app = express();

//app.use is for creating middleware for api
app.use(express.json());// parse json when sending data
app.use(cors());//browswer policy 

//route for auth
app.use('/auth',authRoute);
app.use('/products',productRoute);


// render basic html for our api route
app.get('/', async(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(PORT,()=>{
    console.log("server running at " + PORT);
});