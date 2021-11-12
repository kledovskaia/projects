import { gql } from "@apollo/client";

export const ADD_CARD = gql`
  mutation addCard($name: String!, $imgUrl: String!) {
    addCard(name: $name, imgUrl: $imgUrl) {
      name
      imgUrl
    }
  }
`;
