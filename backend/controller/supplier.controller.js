const dbConfig = require ('../config.js');
const mysql = require('mysql2');


const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const getSupplier = async (req,res) =>{
    const [result] = await pool.query(` SELECT * FROM supplier`);
    return res.status(200).send(result);
}

const getSupplierById = async (req,res) =>{
    const id = req.params.id;
    const [result] = await pool.query(`SELECT * FROM supplier WHERE id = ?`,[id]);
    return res.status(200).send(result);
}

const updateSupplier = async (req,res) =>{
    const {name} = req.body
    const id = req.params.id;
    const [result] = await pool.query(`
        UPDATE supplier SET 
        name = ?,
        WHERE id = ?`
    ,[name,id]);
    return res.status(200).send(`Updated ${result.affectedRows} row(s)`);
}

const createSupplier = async(req,res)=>{
    const {name} = req.body
    const [result] = await pool.query(`INSERT INTO supplier 
    (name)
    VALUES (?)`,[name]);
     return res.status(200).send(result.insertId);
}
const deleteSupplier = async (req,res) =>{
    const id = req.params.id;
    const [result] = await pool.query(`DELETE FROM supplier WHERE id = ?`,[id]);
    return res.status(200).send(`deleted ${result.affectedRows}`)
}

module.exports = {
    getSupplier,getSupplierById,createSupplier,updateSupplier,deleteSupplier
};