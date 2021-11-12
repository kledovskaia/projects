import bcrypt from "bcrypt";
import { AuthenticationError, ForbiddenError } from "apollo-server-errors";
import { generateJWT } from "../jwt.js";

export const addCard = (_, { name, imgUrl }, { models }) =>
  models.Card.create({ name, imgUrl });

export const signIn = async (_, { name, password }, { models }) => {
  try {
    const user = await models.User.findOne({
      name,
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

export const signUp = async (_, { name, password }, { models }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const card = await models.Card.create({ name, imgUrl: undefined });
    const user = await models.User.create({
      name: card.name,
      password: hashedPassword,
    });
    return generateJWT(user);
  } catch (error) {
    console.log(error);
    throw new AuthenticationError("Error Creating Account");
  }
};
