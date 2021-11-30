import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    getUsers {
      _id
      name
      imgUrl
    }
  }
`;

export const GET_MY_INFO = gql`
  query {
    getMyInfo {
      _id
      name
      imgUrl
      email
    }
  }
`;
