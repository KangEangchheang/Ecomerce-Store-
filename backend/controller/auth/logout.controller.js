const dbConfig = require ('../../config/config.js');
const mysql = require('mysql2');
require('dotenv').config;

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const logout = async (req,res)=>{
    //delete access token
    const id = req.params.id;
    const cookie = req.cookies;
    
    if(!cookie?.jwt){ return res.status(204).json({message:'no content'})};

    const refreshToken = cookie.jwt;
    //check refresh token in db
    const [result] = await pool.query(`SELECT * FROM user WHERE refresh_token = ? OR id = ?`,[refreshToken,id]);
    const user = result[0];
    if(!user) {
        res.clearCookie('jwt',{httpOnly:true,maxAge:7*24*60*60*1000});
        return res.status(204).json({messege:'no content'});
    }
    
    await pool.query('UPDATE user SET isActive = ?,refresh_token = ? WHERE id = ?',[0,null,id]);
    res.clearCookie('jwt',{httpOnly:true,sameSite:'none',secure:true,maxAge:7*24*60*60*1000});
    res.status(204).json({message:'logout success'});
}

module.exports = {logout}