const dbConfig = require ('../config/config.js');
const mysql = require('mysql2');

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const getProduct = async (req,res) =>{
    try {
        const [result] = await pool.query(` SELECT * FROM product`);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
}
const getRelatedProduct = async (req,res) =>{
    const name = req.params.name;

    const [cat] =await pool.query(`SELECT * FROM category WHERE name LIKE ? `,[`%${name}%`]);
    const [result] = await pool.query(`SELECT * FROM product WHERE category_id = ? LIMIT 5`, [cat[0].id]);
    return res.status(200).send(result);
}

const getProductById = async (req,res) =>{
    try {
        const id = req.params.id;
        const [result] = await pool.query(`SELECT * FROM product WHERE id = ?`,[id]);
        return res.status(200).send(result[0]);
    } catch (error) {
        console.log(error);
    }
}

// get product by name
const getProductByName = async(req, res) => {
    const name = req.params.name;

    try{
        const [result] = await pool.query(`SELECT * FROM product WHERE name LIKE ?;`, [`%${name}%`]);
        return res.status(200).send(result);
    } catch(error){
        console.error('Error fetching product by productName:', error);
        return res.status(500).send('Internal Server Error');
    }
}
const getProductByCategoryName = async(req,res)=>{
    const name = req.params.name;
    try{
        const [cat] =await pool.query(`SELECT * FROM category WHERE name LIKE ? `,[`%${name}%`]);
        const [result] = await pool.query(`SELECT * FROM product WHERE category_id = ?`, [cat[0].id]);
        return res.status(200).send(result);
    } catch(error){
        console.error('Error fetching product by productName:', error);
        return res.status(500).send('Internal Server Error');
    }
}
const getNewestProductByCategoryName = async(req,res)=>{
    const name = req.params.name;
    try{
        const [cat] =await pool.query(`SELECT * FROM category WHERE name LIKE ? `,[`%${name}%`]);
        const [result] = await pool.query(`SELECT * FROM product WHERE category_id = ? ORDER BY created_at DESC`, [cat[0].id]);
        return res.status(200).send(result);
    } catch(error){
        console.error('Error fetching product by productName:', error);
        return res.status(500).send('Internal Server Error');
    }
}
const updateProduct = async (req,res) =>{
    const product = req.body
    const id = req.params.id;
    const [result] = await pool.query(`
        UPDATE product SET 
        name = ?,
        description = ?,
        quantity = ?,
        price = ?,
        discount_id = ?,
        supplier_id = ?,
        category_id = ?,
        isfeatured = ? 
        WHERE id = ?`
    ,[
        product.name, product.description,product.quantity,product.price,product.discount_id,product.supplier_id,product.category_id,product.isfeatured,id
    ]);
    return res.status(200).send(`Updated ${result.affectedRows} row(s)`);
}

const createProduct = async(req,res)=>{
    const product = req.body;
    const [result] = await pool.query(`INSERT INTO product 
    (name,description,quantity,price,discount_id,supplier_id,category_id)
    VALUES (?,?,?,?,?,?,?)`,
    [
        product.name, product.description,product.quantity,product.price,product.discount_id,product.supplier_id,product.category_id
    ]
    );
    return res.status(200).json({"product_id":result.insertId});
}
const deleteProduct = async (req,res) =>{
    const id = req.params.id;
    const [result] = await pool.query(`DELETE FROM product WHERE id = ?`,[id]);
    return res.status(200).send(`deleted ${result.affectedRows}`)
}


const getFeature = async(req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM product WHERE isfeatured = ? `,[1]);
        return res.status(200).send(result);
    } catch (error) {
        console.error('Error fetching featured products:', error);
        throw error;
    }
}

const getNewProducts = async (req, res) => {
    try {
        const [results] = await pool.query(`
            SELECT *
            FROM product
            WHERE created_at BETWEEN NOW() - INTERVAL 21 DAY AND NOW()
        `);

        return res.status(200).json(results);
    } catch (error) {
        console.error('Error retrieving new products:', error);
        return res.status(500).send('Internal Server Error');
    }
};
const getNewestProducts = async (req, res) => {
    try {
        const [results] = await pool.query(`
            SELECT *
            FROM product
            ORDER BY created_at DESC
        `);

        return res.status(200).json(results);
    } catch (error) {
        console.error('Error retrieving new products:', error);
        return res.status(500).send('Internal Server Error');
    }
};
const getNewestFeatureProduct = async (req, res) => {
    try {
        const [results] = await pool.query(`
            SELECT *
            FROM product
            WHERE isfeatured = '1' ORDER BY created_at DESC
        `);

        return res.status(200).json(results);
    } catch (error) {
        console.error('Error retrieving new products:', error);
        return res.status(500).send('Internal Server Error');
    }
};
module.exports = {
    getProduct,
    getRelatedProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByName,
    getFeature,
    getNewProducts,
    getProductByCategoryName,
    getNewestFeatureProduct,
    getNewestProducts,
    getNewestProductByCategoryName
};