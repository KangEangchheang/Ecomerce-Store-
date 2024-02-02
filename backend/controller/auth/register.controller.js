const dbConfig = require ('../../config/config.js');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const register = async(req,res)=>{
    const {username,password,email} =req.body;
    if (!username || !password || !email){
        return res.status(400).json({'message':'username, email and password are required'})
    }
    //check for duplicate username in db
    const [result] = await pool.query(`SELECT email from user where email = ?`,email)
    const duplicate = result[0]?.email === email || false;
    if (duplicate){
        return res.status(409).json({'message':'email is already used'})
    }
    try {
        //encrypt password
        const hashedPassword = await bcrypt.hash(password,10);

        //store new user
        const newUser = [username,email,hashedPassword,'customer'];
        await pool.query(`INSERT INTO user (username, email, password,user_type) VALUES(?,?,?,?)`,newUser);
        return res.status(200).send('Success');
    } catch (error) {
        res.status(500).json({'message':error.message});
    }
}

module.exports = {
    register
}