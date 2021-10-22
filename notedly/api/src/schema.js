const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    favorites: [Note!]!
  }
  type Note {
    id: ID!
    content: String!
    author: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    favoriteCount: Int!
    favoritedBy: [User!]!
  }
  type Query {
    notes: [Note]
    note(id: ID!): Note
    me: User
    user(username: String!): User
    users: [User!]!
  }
  type Mutation {
    toggleFavorite(id: ID!): Note!
    addNote(content: String!): Note!
    deleteNote(id: ID!): Boolean!
    updateNote(id: ID!, content: String!): Note!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
  }
`;
