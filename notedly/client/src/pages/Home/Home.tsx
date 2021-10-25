import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { useEffect } from "react"
import { useRequest } from "../../hooks/useRequest"
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
  const { data, loading, error, fetchMore } = useRequest<TResponse>("GET_NOTES")
  useDocumentTitle("Home")

  useEffect(() => {
    console.log(data)
  }, [data])

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
