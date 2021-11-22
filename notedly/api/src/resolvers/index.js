const Query = require('./query');
const Mutation = require('./mutation');
const Note = require('./note');
const User = require('./user');

const resolvers = {
  Query,
  Mutation,
  Note,
  User
};

module.exports = resolvers;
