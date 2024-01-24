const express = require('express');
const multer = require('multer');
const controller = require('../controller/banner.controller.js');

const ban = express.Router();

const storage = multer.diskStorage({
    destination:'./public/banners',
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
    limits:{fileSize:4000000},//this is 2mb
    fileFilter:fileFilter
});

ban.get('/',controller.getBanners);
ban.get('/:id',controller.getBannersById);
ban.post('/',upload.array('banner'),controller.createBanner);
ban.delete('/:id',controller.deleteBanner);


module.exports = ban;