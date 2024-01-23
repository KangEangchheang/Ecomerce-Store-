const product =require('./product.js');
const image = require('./image.js');
const category = require('./category.js');
const supplier = require('./supplier.js');
const discount = require('./discount.js');
const user = require('./user.js')
const banner = require('./banner_image.js')

const model = [
    category,
    supplier,
    discount,
    product,
    image,
    user,
    banner
]
module.exports = model;