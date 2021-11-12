import bcrypt from "bcrypt";
import { AuthenticationError, ForbiddenError } from "apollo-server-errors";
import { generateJWT } from "../jwt.js";

export const signIn = async (_, { email, password }, { models }) => {
  try {
    const user = await models.User.findOne({
      email,
    });
    if (!user) throw new AuthenticationError("User Not Found");
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new AuthenticationError("Wrong Password");
    return generateJWT(user);
  } catch (error) {
    console.log(error);
    throw new AuthenticationError("Authentication Failed");
  }
};

export const signUp = async (_, { name, email, password }, { models }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const found = await models.User.findOne({ email });
    if (found)
      throw new AuthenticationError(
        `User with email "${email}" is already exist`
      );
    const user = await models.User.create({
      name,
      email,
      password: hashedPassword,
    });
    return generateJWT(user);
  } catch (error) {
    console.log(error);
    throw new AuthenticationError("Error Creating Account");
  }
};
