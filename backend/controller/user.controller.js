//==== Third Party Library
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//==== customer Library
const dbConfig = require('../config/config.js');
const mysql = require('mysql2');




const pool = mysql.createPool({...dbConfig, connectionLimit: 10}).promise();

const getUser = async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM user`);
    return res.status(200).send(result);
}

const getUserByName = async (req, res) => {
    try {
        const name = req.params.name;
        const [result] = await pool.query(`SELECT * FROM user WHERE username LIKE ?;`, [`%${name}%`]);
        return res.status(200).send(result);
    } catch (error) {
        console.error('Error fetching user by name:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming 'id' is the parameter in the route path
        const [result] = await pool.query('SELECT * FROM user WHERE id = ?;', [userId]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const createUser = async(req, res) => {
    const { username, user_type, password, phone_number, email, profile_image, isActive } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the user with the hashed password
        const [result] = await pool.query(`
            INSERT INTO user
            (user_type, username, phone_number, email, password, profile_image, isActive)
            VALUES (?,?,?,?,?,?,?);
        `, [user_type, username, phone_number, email, hashedPassword, profile_image, isActive]);

        // Generate JWT token
        const token = jwt.sign({ userId: result.insertId }, 'yourSecretKey', { expiresIn: '1h' });

        return res.status(200).json({ userId: result.insertId, token });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).send('Internal Server Error');
    }
}


const updateUser = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming 'id' is the parameter in the route path
        const { username, user_type, phone_number, email, profile_image, isActive } = req.body;

        // Check if the user exists
        const [existingUser] = await pool.query('SELECT * FROM user WHERE id = ?;', [userId]);

        if (existingUser.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user information
        await pool.query(`
            UPDATE user
            SET
                username = ?,
                user_type = ?,
                phone_number = ?,
                email = ?,
                profile_image = ?,
                isActive = ?
            WHERE id = ?;
        `, [username, user_type, phone_number, email, profile_image, isActive, userId]);

        return res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming 'id' is the parameter in the route path

        // Check if the user exists
        const [existingUser] = await pool.query('SELECT * FROM user WHERE id = ?;', [userId]);

        if (existingUser.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete the user
        await pool.query('DELETE FROM user WHERE id = ?;', [userId]);

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getUser, createUser, getUserByName, getUserById, updateUser, deleteUser
};