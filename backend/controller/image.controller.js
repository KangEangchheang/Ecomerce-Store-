const dbConfig = require ('../config/config.js');
const mysql = require('mysql2');


const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const createProductImage = async (req,res)=>{
    try {
        const images = req.files;
        const {id} = req.body;
        for (let i in images){
            const imgname = images[i].filename;
            await pool.query(`INSERT INTO image (image,product_id) VALUES (?,?)`,[imgname,id]);
        }
        
        return res.status(201).json({id,images});
    } catch (e) {
        return res.status(500).json({
            "message": "Internal Server Error"
        });
    }
}
const deleteImage = async (req,res)=>{
    try {
        const filename = req.params.name;
        await pool.query(`DELETE FROM image WHERE image = ?`,[filename]);
    }catch(e){
        return res.status(500).json({
            "message": "Internal Server Error"
        });
    }
}
const createSupplierImage = async (req,res)=>{
    try {
        const images = req.files;
        const {id} = req.body;
        for (let i in images){
            const imgname = images[i].filename;
            await pool.query(`INSERT INTO image (image,supplier_id) VALUES (?,?)`,[imgname,id]);
        }
        
        return res.status(201).json({id,images});
    } catch (e) {
        return res.status(500).json({
            "message": "Internal Server Error"
        });
    }
}
module.exports = {
   createProductImage,createSupplierImage,deleteImage
};