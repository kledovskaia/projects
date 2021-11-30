import { NoteFeed } from "../../components/NoteFeed/NoteFeed"
import { NoteGrid } from "../../components/NoteGrid/NoteGrid"
import { useAppQuery } from "../../hooks/useAppQuery"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"

export const MyNotes = () => {
  useDocumentTitle("My Notes")
  const { data, loading, error } = useAppQuery<{
    me: {
      notes: TNote[]
    }
  }>("GET_MY_NOTES")

  return (
    <NoteGrid>{data && data.me && <NoteFeed notes={data.me.notes} />}</NoteGrid>
  )
}
