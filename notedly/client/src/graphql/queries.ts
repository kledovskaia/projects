import { gql } from "@apollo/client"

export const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`

export const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        updatedAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`

export const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      updatedAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`
