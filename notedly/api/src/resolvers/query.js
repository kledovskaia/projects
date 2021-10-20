const models = require('../models');

const Query = {
  hello: () => 'Hello world!',
  notes: async () => models.Note.find(),
  note: async (_, { id }) => models.Note.findById(id)
};

module.exports = Query;
