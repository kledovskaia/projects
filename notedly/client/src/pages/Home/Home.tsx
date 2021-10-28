import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { useAppQuery } from "../../hooks/useAppQuery"
import { NoteFeed } from "../../components/NoteFeed/NoteFeed"
import { NoteGrid } from "../../components/NoteGrid/NoteGrid"

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
    <NoteGrid>
      {data && (
        <>
          <NoteFeed notes={data.noteFeed.notes} />
          {data.noteFeed.hasNextPage && (
            <button onClick={handleFetchMoreNotes}>Load More</button>
          )}
        </>
      )}
    </NoteGrid>
  )
}
