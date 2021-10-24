import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { useRequest } from "../../hooks/useRequest"

export const Home = () => {
  useDocumentTitle("Home")
  const { data, loading, error, fetchMore } = useRequest("GET_NOTES")

  return <div>Home</div>
}
