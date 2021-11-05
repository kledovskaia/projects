import { useHistory } from "react-router"
import { NoteForm } from "../../components/NoteForm/NoteForm"
import { GET_MY_NOTES, GET_NOTES } from "../../graphql/queries"
import { useAppMutation } from "../../hooks/useAppMutation"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"

export const NewNote = () => {
  useDocumentTitle("New Note")
  const history = useHistory()
  const [newNote, { loading, error }] = useAppMutation("NEW_NOTE", {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: ({ newNote }: { newNote: TNote }) => {
      history.push(`/note/${newNote.id}`)
    },
  })

  const handleSubmit = (note: string) => {
    if (!note.trim()) return
    newNote({
      variables: {
        content: note.trim(),
      },
    })
  }

  return <NoteForm submit={handleSubmit} />
}
