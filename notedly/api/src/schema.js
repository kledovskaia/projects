const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Note {
    id: ID
    content: String
    author: String
  }
  type Query {
    hello: String
    notes: [Note]
    note(id: ID, author: String): Note
  }
  type Mutation {
    addNote(content: String, author: String): Note
  }
`;

module.exports = typeDefs;
