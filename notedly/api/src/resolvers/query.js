const Query = {
  note: async (_, { id }, { models }) => models.Note.findById(id),
  notes: async (_, __, { models }) => models.Note.find(),
  noteFeed: async (_, { cursor }, { models }) => {
    const limit = 10;
    let hasNextPage = false;
    let cursorQuery = {};

    if (cursor) {
      cursorQuery = { _id: { $lt: cursor } };
    }

    let notes = await models.Note.find(cursorQuery)
      .sort({ _id: -1 })
      .limit(limit + 1);

    if (!notes.length) return { notes, cursor: null, hasNextPage };

    if (notes.length > limit) {
      hasNextPage = true;
      notes = notes.slice(0, -1);
    }

    const newCursor = notes[notes.length - 1]._id;

    return {
      notes,
      cursor: newCursor,
      hasNextPage
    };
  },

  me: async (_, __, { user, models }) =>
    user ? await models.User.findById(user.id) : null,
  user: async (_, { username }, { models }) =>
    await models.User.findOne({
      username
    }),
  users: async (_, __, { models }) => await models.User.find()
};

module.exports = Query;
