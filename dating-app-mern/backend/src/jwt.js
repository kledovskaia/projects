import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
};

export const validateJWT = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
