const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
  }
  type Note {
    id: ID!
    content: String!
    author: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type Query {
    notes: [Note]
    note(id: ID!): Note
    me: User
    user(username: String!): User
    users: [User!]!
  }
  type Mutation {
    addNote(content: String!): Note!
    deleteNote(id: ID!): Boolean!
    updateNote(id: ID!, content: String!): Note!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
  }
`;
