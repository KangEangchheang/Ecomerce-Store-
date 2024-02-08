const dbConfig = require ('../../config/config.js');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config;

const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const login = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({'message':'email and password are required'})
    }
    const [result] = await pool.query(`SELECT * FROM user WHERE email = ?`,[email]);
    const user = result[0];
    const foundUser = user?.email===email || false;
    if (!foundUser){
        return res.status(401).json({'message':'unauthorized'});
    }

    //check password
    const match = await bcrypt.compare(password,user.password);
    if(match){
        const user_type = user?.user_type;
        //create JWT
        const accessToken = jwt.sign({
            UserInfo: {
                email:user.email,
                user_type:user_type
            }
        },
        process.env.JWT_ACCESS_TOKEN,
        {
            expiresIn: '15m'
        });

        const refreshToken = jwt.sign({
            email:user.email
        },
        process.env.JWT_REFRESH_TOKEN,
        {
            expiresIn: '7d'
        });

        //save refresh token to current login user
        const updateUser = [1,refreshToken,user.email];
        await pool.query('UPDATE user SET isActive = ?,refresh_token = ? WHERE email = ?',updateUser);

        //sent cookie httponly hide cookie from people
        res.cookie('jwt',refreshToken,{httpOnly:true, sameSite:'lax', secure:true ,maxAge:7*24*60*60*1000});//1 week cookie
        res.json({
            accessToken:accessToken,
            user:{
                id:user.id,
            }
        });
    }else{
        res.status(401).json({'message':'unauthorized'});
    }
}

module.exports = {login}