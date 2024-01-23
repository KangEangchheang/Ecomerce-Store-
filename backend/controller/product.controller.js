const dbConfig = require ('../config/config.js');
const mysql = require('mysql2');

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const getProduct = async (req,res) =>{
    const [result] = await pool.query(` SELECT * FROM product`);
    return res.status(200).send(result);
}

const getProductById = async (req,res) =>{
    const id = req.params.id
    const [result] = await pool.query(`SELECT * FROM product WHERE id = ?`,[id]);
    return res.status(200).send(result);
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
        const [result] = await pool.query(`SELECT * FROM product`);
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
            WHERE created_at BETWEEN NOW() - INTERVAL 7 DAY AND NOW()
        `);

        return res.status(200).json(results);
    } catch (error) {
        console.error('Error retrieving new products:', error);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByName,
    getFeature,
    getNewProducts
};