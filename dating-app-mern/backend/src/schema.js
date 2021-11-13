import { gql } from "apollo-server-express";

export default gql`
  type User {
    _id: String!
    name: String!
    email: String!
    imgUrl: String
  }
  type Query {
    getUsers: [User]!
  }
  type Mutation {
    signIn(email: String!, password: String!): String!
    signUp(name: String!, email: String!, password: String!): String!
  }
`;
