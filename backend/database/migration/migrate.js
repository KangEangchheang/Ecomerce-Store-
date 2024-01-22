const dbConfig = require ('../../config.js');
const mysql = require('mysql2');
const model = require('../../models/models');

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const migrate = async () =>{
    try{
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