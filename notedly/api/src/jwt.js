const jwt = require('jsonwebtoken');

const generateJWT = user => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
};

const validateJWT = token => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateJWT,
  validateJWT
};
