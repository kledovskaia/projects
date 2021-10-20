const Mutation = {
  addNote: (_, { content, author }, { models }) => {
    const newNote = {
      content,
      author
    };
    return models.Note.create(newNote);
  }
};

module.exports = Mutation;
