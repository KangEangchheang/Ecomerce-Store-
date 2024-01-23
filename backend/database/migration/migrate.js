const dbConfig = require ('../../config/config.js');
const mysql = require('mysql2');
const model = require('../../models/models');

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();
const drop = [
    "image",
    "product",
    "discount",
    "category",
    "supplier",
    "user",
    "banner_image"
]
const migrate = async () =>{
    try{
        try{
            for (const item in drop){
                await pool.query(`DROP TABLE ${drop[item]}`);
            }
        }catch(e){
                console.log(e);
        }
            
        for(const item in model){
            await pool.query(model[item]);
        }
        console.log('migrate success');
        process.exit();
    }catch(e){
        console.log(e);
        process.exit();
    }

}
migrate();