import { useQuery, gql } from "@apollo/client"

const schemas = {
  GET_NOTES: gql`
    query noteFeed($cursor: String) {
      noteFeed(cursor: $cursor) {
        cursor
        hasNextPage
        notes {
          id
          createdAt
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
  `,
}

type TRequest = keyof typeof schemas

export const useRequest = (type: TRequest) => {
  return useQuery(schemas[type])
}
