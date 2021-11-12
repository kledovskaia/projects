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
    addCard(name: String!, imgUrl: String!): Card!
  }
`;
