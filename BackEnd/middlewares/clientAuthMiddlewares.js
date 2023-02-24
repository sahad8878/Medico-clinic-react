
const jwt = require('jsonwebtoken');

// JWT middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    console.log("Authorization failed");
    return res.status(401).json({ message: 'Authorization failed' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
        console.log('Authorization failed');
      return res.status(401).json({ message: 'Authorization failed' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;