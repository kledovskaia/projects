import { gql } from "@apollo/client"

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`

export const SIGN_UP = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password)
  }
`

export const UPDATE_PROFILE = gql`
  mutation updateProfile($name: String, $email: String, $imgUrl: String) {
    updateProfile(name: $name, email: $email, imgUrl: $imgUrl) {
      name
      email
      imgUrl
    }
  }
`
