const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req, res, next) {
  const header = req.headers.authorization || req.headers.Authorization;

  if(!header?.startsWith('Bearer ')){ 
    return res.status(401).json({error:'unauthorized'}); 
  }
  
  const token = header.split(" ")[1]
//   const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ success: false, message: 'Token is missing' });
  }

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid token' });
    }
    // If the token is valid, save the decoded information in the request for later use
    req.email = decoded.UserInfo.email;
    req.user_type = decoded.UserInfo.user_type
    next(); // Move on to the next middleware or route handler
  });
}

module.exports = verifyToken;
