const dbConfig = require ('../../config.js');
const mysql = require('mysql2');
const products = require('./data/products.js')
const suppliers = require('./data/supplier.js');
const {productImages,supplierImages} = require('./data/image.js');
const discounts = require('./data/discount.js');
const categories = require('./data/category.js');

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const seed = async () =>{
    try{
        for(let i = 0;i<suppliers.length;i++){  
            await pool.query(`INSERT INTO supplier (name) VALUES (?)`,
            [suppliers[i]]);
        }
        for(let i = 0;i<categories.length;i++){  
            await pool.query(`INSERT INTO category (name) VALUES (?)`,
            [categories[i]]);
        }
        for(let i = 0;i<discounts.length;i++){  
            await pool.query(`INSERT INTO discount (name,description,discount_type,percent,minimum_pay,start_discount,end_discount) VALUES (?,?,?,?,?,?,?)`,
            [...discounts[i]]);
        }
        for(let i = 0;i<products.length;i++){  
            await pool.query(`INSERT INTO product (name,description,quantity,price,discount_id,supplier_id,category_id) VALUES (?,?,?,?,?,?,?)`,
            [...products[i]]);
        }
        for(let i = 0;i<productImages.length;i++){  
            await pool.query(`INSERT INTO image (image,product_id) VALUES (?,?)`,
            [...productImages[i]]);
        }
        for(let i = 0;i<supplierImages.length;i++){  
            await pool.query(`INSERT INTO image (image,supplier_id) VALUES (?,?)`,
            [...supplierImages[i]]);
        }
        console.log('seeding success');
        process.exit();
    }catch(e){
        console.log(e);
        process.exit();
    }

}
seed();