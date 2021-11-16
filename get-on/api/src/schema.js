const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    
  }
  type Mutation {
    signIn(username: String, email: String, password: String!): String!
    signUp(username: String!, email: String!, password: String!): String!
  } 
`;
