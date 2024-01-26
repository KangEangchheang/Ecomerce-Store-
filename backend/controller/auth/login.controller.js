//===== Third Party Library
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//===== cutomer Library
const dbConfig = require('../../config/config.js');
const mysql = require('mysql2');
const config = require('../../config/env.js')

const pool = mysql.createPool({...dbConfig, connectionLimit: 10}).promise();

const getLogin = async(req, res) => {
    

    try {
        const { email, password } = req.body;
        // Find the user by email
        const [userResult] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);

        if (userResult.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = userResult[0];

        // Compare the provided password with the hashed password in the user object
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Password is correct, generate and return a JWT token
        const token = jwt.sign({ userId: user.id, email: user.email }, config.secretKey, { expiresIn: '1h' });

        res.json({ userId: user.id, token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getLogin,
}