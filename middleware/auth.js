const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'Surya@2009';

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access Denied' });
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(400).json({ error: 'Invalid Token' });
        req.user = user;
        next();
    });
};

module.exports = authenticateJWT;
