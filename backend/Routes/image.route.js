const express = require('express');
const multer = require('multer');
const controller = require('../controller/image.controller.js');

const img = express.Router();

const storage = multer.diskStorage({
    destination:'./public/images',
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}_${file.originalname}`)
    }
});
const fileFilter = (req,file,callback) => {
  const supportedFiles = ['image/jpeg', 'image/png'];
  if (supportedFiles.includes(file.mimetype)) {
    return callback(null, true);
  } else {
    //reject file
    return callback('Unsupported file format', false);
  }
};
const upload = multer({
    storage:storage,
    limits:{fileSize:5000000},//this is 2mb
    fileFilter:fileFilter
});
img.get('/suppliers/:id',controller.getSupplierImage);
img.get('/products/:id',controller.getProductImage);
img.post('/suppliers',upload.array('supplier'),controller.createSupplierImage);
img.post('/products',upload.array('products'),controller.createProductImage);
img.delete('/delete/:name',controller.deleteImage);

module.exports = img;