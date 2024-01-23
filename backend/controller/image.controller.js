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
const getSupplierImage = async (req,res) =>{
    try{
        const id = req.params.id;
        const [result] = await pool.query(`SELECT * FROM image WHERE supplier_id = ? LIMIT 1`,[id]);
        return res.status(200).send(result[0]);
    }catch(e){
        return res.status(500).json({
            "message": "Internal Server Error"
        });
    }
}
const getProductImage = async (req,res) =>{
    try{
        const id = req.params.id;
        const [result] = await pool.query(`SELECT * FROM image WHERE product_id = ?`,[id]);
        return res.status(200).send(result);
    }catch(e){
        return res.status(500).json({
            "message": "Internal Server Error"
        });
    }
}
const getSingleProductImage = async (req,res) =>{
    try{
        const id = req.params.id;
        const [result] = await pool.query(`SELECT * FROM image WHERE product_id = ? LIMIT 1`,[id]);
        return res.status(200).send(result[0]);
    }catch(e){
        return res.status(500).json({
            "message": "Internal Server Error"
        });
    }
}
module.exports = {
   createProductImage,createSupplierImage,deleteImage,getSupplierImage,getProductImage
};