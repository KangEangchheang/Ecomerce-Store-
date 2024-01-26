// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//     // Get the token from the Authorization header
//     const token = req.headers.authorization;

//     // Check if the token is missing
//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized - Missing token' });
//     }

//     // Verify the token
//     jwt.verify(token, 'yourSecretKey', (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ message: 'Unauthorized - Invalid token' });
//         }
        
//         // Attach the decoded user information to the request object
//         req.user = decoded;
//         next(); // Move on to the next middleware or route handler
//     });
// };

// module.exports = authMiddleware;

// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../env')

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'] || req.headers['authorization'].split(" ")[1];
//   const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ success: false, message: 'Token is missing' });
  }

  console.log('Secretkey: '+ config.secretKey);
  console.log('token: '+ token);

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    console.log('Decoded Token:', decoded);
    // If the token is valid, save the decoded information in the request for later use
    req.decoded = decoded;
    next(); // Move on to the next middleware or route handler
  });
}

module.exports = verifyToken;
