require('dotenv').config();
const path = require('path');
const productRoute = require('./Routes/product.route.js');
const imageRoute = require('./Routes/image.route.js');
const categoryRoute = require('./Routes/category.route.js');
const supplierRoute = require('./Routes/supplier.route.js');
const discountRoute = require('./Routes/discount.route.js');
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT;

//app.use is for creating middleware for api
app.use(express.json());// parse json when sending data
app.use(cors());//browswer policy 
app.use(express.static('public'));// easier access to image from public folder

//route list
app.use('/api/products',productRoute);
app.use('/upload',imageRoute);
app.use('/api/category',categoryRoute);
app.use('/api/supplier',supplierRoute);
app.use('/api/discount',discountRoute);

// render basic html for our api route
app.get('/', async(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(PORT,()=>{
    console.log("server running at " + PORT);
});