import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`

export const SIGN_IN = gql`
  mutation signIn($username: String, $email: String, $password: String!) {
    signIn(username: $username, email: $email, password: $password)
  }
`
export const NEW_NOTE = gql`
  mutation newNote($content: String!) {
    newNote(content: $content) {
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
`
export const UPDATE_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
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
`

export const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`

export const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
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
`
