export const addCard = async (_, { name, imgUrl }, { models }) =>
  await models.Card.create({ name, imgUrl });
