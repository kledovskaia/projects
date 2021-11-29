import { ForbiddenError } from "apollo-server-express";

export const getUsers = async (_, __, { models, user }) => {
  if (!user) throw new ForbiddenError("Please Sign In to perform this action");
  return await models.User.find({ imgUrl: { $exists: true } });
};

export const getMyInfo = async (_, __, { models, user }) =>
  user ? await models.User.findById(user.id) : null;
