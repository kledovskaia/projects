export const getUsers = async (_, __, { models }) =>
  await models.User.find({ imgUrl: { $exists: true } });
