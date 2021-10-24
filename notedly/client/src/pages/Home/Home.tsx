import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { useEffect } from "react"
import { useRequest } from "../../hooks/useRequest"
import { Note } from "../../components/Note/Note"
import { Container } from "./styles"

export const Home = () => {
  const { data, loading, error } = useRequest<{
    noteFeed: {
      notes: TNote[]
    }
  }>("GET_NOTES")
  useDocumentTitle("Home")

  useEffect(() => {
    console.log(data)
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <Container>
      {data &&
        data.noteFeed.notes.map((note: TNote) => (
          <Note key={note.id} note={note} />
        ))}
    </Container>
  )
}
