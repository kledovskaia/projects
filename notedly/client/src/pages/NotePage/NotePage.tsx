import { useEffect } from "react"
import { useParams } from "react-router"
import { Note } from "../../components/Note/Note"
import { useRequest } from "../../hooks/useRequest"

export const NotePage = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading, error } = useRequest<{ note: TNote }>("GET_NOTE", {
    variables: { id },
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return <>{data && data.note && <Note note={data.note} />}</>
}
