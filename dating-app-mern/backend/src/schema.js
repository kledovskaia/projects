import { gql } from "apollo-server-express";

export default gql`
  type User {
    name: String!
    email: String!
    imgUrl: String
  }
  type Query {
    getUsers: [User]!
  }
  type Mutation {
    signIn(name: String, email: String, password: String!): String!
    signUp(name: String!, email: String!, password: String!): String!
  }
`;
