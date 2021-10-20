const models = require('../models');

const Mutation = {
  addNote: (_, { content, author }) => {
    const newNote = {
      content,
      author
    };
    return models.Note.create(newNote);
  }
};

module.exports = Mutation;
