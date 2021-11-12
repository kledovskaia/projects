import { gql } from "apollo-server-express";

export default gql`
  type Card {
    name: String!
    imgUrl: String!
  }
  type Query {
    getAllCards: [Card]!
  }
  type Mutation {
    signIn(name: String!, password: String!): String!
    addCard(name: String!, imgUrl: String!): Card!
    signUp(name: String!, password: String!): String!
  }
`;
