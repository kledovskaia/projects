const Mutation = {
  addNote: async (_, { content, author }, { models }) => {
    const newNote = {
      content,
      author
    };
    return await models.Note.create(newNote);
  },
  deleteNote: async (_, { id }, { models }) => {
    try {
      await models.Note.findOneAndDelete({ _id: id });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  updateNote: async (_, { id, content }, { models }) => {
    return await models.Note.findOneAndUpdate(
      {
        _id: id
      },
      {
        content
      },
      {
        new: true
      }
    );
  }
};

module.exports = Mutation;
