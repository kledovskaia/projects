import { gql } from "@apollo/client"

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
        favoritedBy {
          id
          username
        }
        author {
          username
          id
          avatar
        }
      }
    }
  }
`
export const GET_MY_NOTES = gql`
  query myNotes {
    me {
      notes {
        id
        createdAt
        updatedAt
        content
        favoriteCount
        favoritedBy {
          id
          username
        }
        author {
          username
          id
          avatar
        }
      }
    }
  }
`
export const GET_FAVORITE_NOTES = gql`
  query myNotes {
    me {
      favorites {
        id
        createdAt
        updatedAt
        content
        favoriteCount
        favoritedBy {
          id
          username
        }
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
