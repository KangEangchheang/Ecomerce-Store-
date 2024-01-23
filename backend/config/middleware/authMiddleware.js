const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.headers.authorization;

    // Check if the token is missing
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Missing token' });
    }

    // Verify the token
    jwt.verify(token, 'yourSecretKey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }
        
        // Attach the decoded user information to the request object
        req.user = decoded;
        next(); // Move on to the next middleware or route handler
    });
};

module.exports = authMiddleware;
