const jwt = require('jsonwebtoken');

const Client = require('../model/clientModel');

// eslint-disable-next-line consistent-return
const requireAuth = async (req, res, next) => {
  // verify authentication

  const { authorization } = req.headers;

  if (!authorization) {
    console.log('Authorization token required');
    return res.status(401).json({ error: 'Authorization token required' });
  }
  const token = authorization.split(' ')[1];
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await Client.findOne({ _id }).select('_id');
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

module.exports = requireAuth;
