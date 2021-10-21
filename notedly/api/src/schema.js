const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: [Note!]!
  }
  type Note {
    id: ID!
    content: String!
    author: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type Query {
    notes: [Note]
    note(id: ID!): Note!
  }
  type Mutation {
    addNote(content: String!, author: String!): Note!
    deleteNote(id: ID!): Boolean!
    updateNote(id: ID!, content: String!): Note!
  }
`;
