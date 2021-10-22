const Query = {
  notes: async (_, __, { models }) => models.Note.find(),
  note: async (_, { id }, { models }) => models.Note.findById(id),

  me: (_, __, { user, models }) => models.User.findById(user.id),
  user: async (_, { username }, { models }) =>
    await models.User.findOne({
      username
    }),
  users: async (_, __, { models }) => models.User.find()
};

module.exports = Query;
