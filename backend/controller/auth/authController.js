// controller/authController.js

const jwt = require('jsonwebtoken');
const config = require('../../config/env');

function login(req, res) {
  const { username, password } = req.body;

  // In a real-world scenario, you would validate the user's credentials here
  // For simplicity, let's assume a hardcoded username and password for this example
  if (username === 'example_user' && password === 'password123') {
    // If credentials are valid, create a JWT token with user information
    const user = {
      id: 1,
      username: 'example_user',
    };

    const token = jwt.sign(user, config.secretKey, { expiresIn: '1h' });

    res.json({ success: true, token });
  } else {
    // If credentials are invalid, return an error response
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
}

module.exports = {
  login,
};
