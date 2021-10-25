import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { useEffect } from "react"
import { useRequest } from "../../hooks/useRequest"
import { Container } from "./styles"
import { NoteFeed } from "../../components/NoteFeed/NoteFeed"

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
      {data && data.noteFeed && <NoteFeed notes={data.noteFeed.notes} />}
    </Container>
  )
}
