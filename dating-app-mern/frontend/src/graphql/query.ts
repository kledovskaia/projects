import { gql } from "@apollo/client";

export const GET_ALL_CARDS = gql`
  query {
    getAllCards {
      name
      imgUrl
    }
  }
`;
