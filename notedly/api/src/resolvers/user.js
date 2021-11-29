module.exports = {
  notes: async (user, _, { models }) =>
    await models.Note.find({ author: user._id }).sort({ _id: -1 }),
  favorites: async (user, _, { models }) =>
    await models.Note.find({ favoritedBy: user._id }).sort({ _id: -1 })
};
