module.exports = {
  author: async (note, _, { models }) =>
    await models.User.findById(note.author),
  favoritedBy: async (note, _, { models }) =>
    await models.User.find({ _id: { $in: note.favoritedBy } })
};
