import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { useEffect } from "react"
import { useAppQuery } from "../../hooks/useAppQuery"
import { Container } from "./styles"
import { NoteFeed } from "../../components/NoteFeed/NoteFeed"

type TResponse = {
  noteFeed: {
    notes: TNote[]
    cursor: TNote["id"]
    hasNextPage: boolean
  }
}

export const Home = () => {
  const { data, loading, error, fetchMore } =
    useAppQuery<TResponse>("GET_NOTES")
  useDocumentTitle("Home")

  const handleFetchMoreNotes = () => {
    fetchMore({
      variables: {
        cursor: data?.noteFeed.cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) =>
        ({
          noteFeed: {
            ...fetchMoreResult?.noteFeed,
            notes: [
              ...previousResult.noteFeed.notes,
              ...(fetchMoreResult?.noteFeed.notes || []),
            ],
          },
        } as TResponse),
    })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <Container>
      {data && data.noteFeed && (
        <>
          <NoteFeed notes={data.noteFeed.notes} />
          {data.noteFeed.hasNextPage && (
            <button onClick={handleFetchMoreNotes}>Load More</button>
          )}
        </>
      )}
    </Container>
  )
}
