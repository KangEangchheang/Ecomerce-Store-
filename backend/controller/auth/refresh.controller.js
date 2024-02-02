const dbConfig = require ('../../config/config.js');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
require('dotenv').config;

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const refresh = async (req,res)=>{
    const cookie = req.cookies;
    if (!cookie?.jwt){ 
        return res.status(401).json({error:'no cookies'})
    }

    const refreshToken = cookie.jwt;
    const [result] = await pool.query(`SELECT * FROM user WHERE refresh_token = ?`,[refreshToken]);
    const user = result[0];
    if(!user) return res.status(403).json({error:'forbidden'});
    
    jwt.verify(refreshToken,process.env.JWT_REFRESH_TOKEN,(err,decode)=>{
        if(err||user.email !== decode.email) return res.status(403).json({error:'forbidden'});
        const user_type = user.user_type;
        const accessToken = jwt.sign(
            {
                UserInfo: {
                    email:decode.email,
                    user_type: user_type
                }
            },
            process.env.JWT_ACCESS_TOKEN,
            {
                expiresIn: '15m'
            });
        res.json({accessToken});//1 day cookie
    });


    
}

module.exports = {refresh}