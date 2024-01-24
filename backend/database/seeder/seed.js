const dbConfig = require ('../../config/config.js');
const mysql = require('mysql2');
const products = require('./data/products.js')
const suppliers = require('./data/supplier.js');
const {productImages,supplierImages} = require('./data/image.js');
const discounts = require('./data/discount.js');
const categories = require('./data/category.js');
const users = require('./data/user.js');
const banners = require('./data/banner.js')

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const seed = async () =>{
    try{
        for(let i = 0; i<banners.length;i++){
            await pool.query(`INSERT INTO banner_image (image) VALUES (?)`,
            [banners[i]]);
        }
        console.log(`${banners.length} entries add to banner_image`);

        for(let i = 0;i<suppliers.length;i++){  
            await pool.query(`INSERT INTO supplier (name) VALUES (?)`,
            [suppliers[i]]);
        }
        console.log(`${suppliers.length} entries add to supplier`);

        for(let i = 0;i<categories.length;i++){  
            await pool.query(`INSERT INTO category (name) VALUES (?)`,
            [categories[i]]);
        }
        console.log(`${categories.length} entries add to category`);

        for(let i = 0;i<discounts.length;i++){  
            await pool.query(`INSERT INTO discount (name,description,discount_type,percent,minimum_pay,start_discount,end_discount) VALUES (?,?,?,?,?,?,?)`,
            [...discounts[i]]);
        }
        console.log(`${discounts.length} entries add to discount`);

        for(let i = 0;i<products.length;i++){  
            await pool.query(`INSERT INTO product (name,description,quantity,price,discount_id,supplier_id,category_id) VALUES (?,?,?,?,?,?,?)`,
            [...products[i]]);
        }
        console.log(`${products.length} entries add to product`);

        for(let i = 0;i<productImages.length;i++){  
            await pool.query(`INSERT INTO image (image,product_id) VALUES (?,?)`,
            [...productImages[i]]);
        }

        for(let i = 0;i<supplierImages.length;i++){  
            await pool.query(`INSERT INTO image (image,supplier_id) VALUES (?,?)`,
            [...supplierImages[i]]);
        }
        console.log(`${productImages.length+supplierImages.length} entries add to image`);

        for(let i = 0; i<users.length;i++){
            await pool.query(`INSERT INTO user (user_type,username,password,phone_number,email,profile_image,isActive) VALUES (?,?,?,?,?,?,?)`,
            [...users[i]]);
        }
        console.log(`${users.length} entries add to user\n`);
        
        console.log('seeding success');
        process.exit();
    }catch(e){
        console.log(e);
        process.exit();
    }

}
seed();