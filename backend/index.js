
const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = require('./config/cors.js');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const productRoute = require('./Routes/product.route.js');
const imageRoute = require('./Routes/image.route.js');
const categoryRoute = require('./Routes/category.route.js');
const supplierRoute = require('./Routes/supplier.route.js');
const discountRoute = require('./Routes/discount.route.js');
const userRoute = require('./Routes/user.route.js');
const bannerRoute = require('./Routes/banner.route.js')
const registerRoute = require('./Routes/auth/register.route.js');
const authRoute = require('./Routes/auth/auth.route.js');
const refreshRoute = require('./Routes/auth/refresh.route.js');
const logoutRoute = require('./Routes/auth/logout.route.js');

const PORT = process.env.PORT || 9000;

//app.use is for creating middleware for api
app.use(express.json());// parse json when sending data
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));//browswer policy 
app.use(express.static('public'));// easier access to image from public folder
app.use(cookieParser());
//route list
app.use('/api/products',productRoute);
app.use('/upload',imageRoute);
app.use('/api/category',categoryRoute);
app.use('/api/supplier',supplierRoute);
app.use('/api/discount',discountRoute);
app.use('/api/user', userRoute);
app.use('/api/banner', bannerRoute);

// Authentication routes
app.use('/api/auth/register',registerRoute);
app.use('/api/auth',authRoute);
app.use('/api/refresh',refreshRoute);
app.use('/api/logout',logoutRoute);

// const bodyParser = require('body-parser');
// const authMiddleware = require('./config/middleware/authMiddleware.js');
// const authController = require('./controller/auth/authController.js');
// const usersController = require('./controller/testController.js');
// app.use(bodyParser.json());


// Apply the authMiddleware to all routes below this line
// app.use(authMiddleware);

// Protected routes
// app.get('/profile', usersController.getUserProfile);



// render basic html for our api route
app.get('/', async(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(PORT,()=>{
    console.log("server running at " + PORT);
});