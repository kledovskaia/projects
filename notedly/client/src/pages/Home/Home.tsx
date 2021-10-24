import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { useEffect } from "react"
import { useRequest } from "../../hooks/useRequest"

export const Home = () => {
  const { data } = useRequest("GET_NOTES")
  useDocumentTitle("Home")

  useEffect(() => {
    console.log(data)
  }, [data])

  return <div>Home</div>
}
