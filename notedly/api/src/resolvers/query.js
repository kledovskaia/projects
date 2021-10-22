const Query = {
  notes: async (_, __, { models }) => models.Note.find(),
  note: async (_, { id }, { models }) => models.Note.findById(id),

  me: async (_, __, { user, models }) =>
    user ? await models.User.findById(user.id) : null,
  user: async (_, { username }, { models }) =>
    await models.User.findOne({
      username
    }),
  users: async (_, __, { models }) => await models.User.find()
};

module.exports = Query;
