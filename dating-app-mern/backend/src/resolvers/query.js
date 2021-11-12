export const getAllCards = async (_, __, { models }) =>
  await models.Card.find();
