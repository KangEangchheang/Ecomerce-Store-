const dbConfig = require ('../config.js');
const mysql = require('mysql2');


const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const getCategory = async (req,res) =>{
    const [result] = await pool.query(` SELECT * FROM category`);
    return res.status(200).send(result);
}

const getCategoryById = async (req,res) =>{
    const id = req.params.id;
    const [result] = await pool.query(`SELECT * FROM category WHERE id = ?`,[id]);
    return res.status(200).send(result);
}

const updateCategory = async (req,res) =>{
    const {name} = req.body
    const id = req.params.id;
    const [result] = await pool.query(`
        UPDATE category SET 
        name = ?
        WHERE id = ?`
    ,[name,id]);
    return res.status(200).send(`Updated ${result.affectedRows} row(s)`);
}

const createCategory = async(req,res)=>{
    const {name} = req.body
    const [result] = await pool.query(`INSERT INTO category 
    (name)
    VALUES (?)`,[name]);
     return res.status(200).send(result.insertId);
}
const deleteCategory = async (req,res) =>{
    const id = req.params.id;
    const [result] = await pool.query(`DELETE FROM category WHERE id = ?`,[id]);
    return res.status(200).send(`deleted ${result.affectedRows}`)
}

module.exports = {
    getCategory,getCategoryById,createCategory,updateCategory,deleteCategory
};