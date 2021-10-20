const Query = {
  notes: async (_, __, { models }) => models.Note.find(),
  note: async (_, { id }, { models }) => models.Note.findById(id)
};

module.exports = Query;
