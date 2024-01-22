const product =require('./product.js');
const image = require('./image.js');
const category = require('./category.js');
const supplier = require('./supplier.js');
const discount = require('./discount.js');

const model = [
    category,
    supplier,
    discount,
    product,
    image
]
module.exports = model;