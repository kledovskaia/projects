export const getAllCards = (root, args, { models }, info) => models.Card.find();
