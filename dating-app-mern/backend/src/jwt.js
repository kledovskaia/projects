import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
  if (!user) throw new Error("Invalid credentials");
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
};

export const validateJWT = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new Error("Authentication token is invalid");
  }
};
