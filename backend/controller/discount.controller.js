const dbConfig = require ('../config/config.js');
const mysql = require('mysql2');


const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const getDiscount = async (req,res) =>{
    const [result] = await pool.query(` SELECT * FROM discount`);
    return res.status(200).send(result);
}

const getDiscountById = async (req,res) =>{
    const id = req.params.id;
    const [result] = await pool.query(`SELECT * FROM discount WHERE id = ?`,[id]);
    return res.status(200).send(result);
}

const updateDiscount = async (req,res) =>{
    const dis = req.body;
    const id = req.params.id;
    const [result] = await pool.query(`
        UPDATE discount SET 
        name = ?,
        description = ?,
        discount_type = ?,
        percent = ?,
        minimum_pay = ?,
        start_discount = ?,
        end_discount = ?,

        WHERE id = ?`
    ,[dis.name,dis.description,dis.discount_type,dis.percent,dis.minimum_pay,dis.start_discount,dis.end_discount,
        id]);
    return res.status(200).send(`Updated ${result.affectedRows} row(s)`);
}

const createDiscount = async(req,res)=>{
    const dis = req.body;
    const [result] = await pool.query(`INSERT INTO discount 
    (name,description,discount_type,percent,minimum_pay,start_discount,end_discount)
    VALUES (?,?,?,?,?,?,?)`,
    [
        dis.name,dis.description,dis.discount_type,dis.percent,dis.minimum_pay,dis.start_discount,dis.end_discount
    ]);
    return res.status(200).json({"discount_id":result.insertId});
}
const deleteDiscount = async (req,res) =>{
    const id = req.params.id;
    const [result] = await pool.query(`DELETE FROM discount WHERE id = ?`,[id]);
    return res.status(200).send(`deleted ${result.affectedRows}`)
}

const getActiveDiscounts = async (req, res) => {
    try {
        const [results] = await pool.query(`
            SELECT *
            FROM discount
            WHERE end_discount > NOW();
        `);

        return res.status(200).json(results);
    } catch (error) {
        console.error('Error retrieving active discounts:', error);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getDiscount,getDiscountById,createDiscount,updateDiscount,deleteDiscount,
    getActiveDiscounts
};