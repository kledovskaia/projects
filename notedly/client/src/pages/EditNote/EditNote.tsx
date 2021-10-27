import { useHistory, useParams } from "react-router"
import { NoteForm } from "../../components/NoteForm/NoteForm"
import { GET_MY_NOTES, GET_NOTES } from "../../graphql/queries"
import { useAppMutation } from "../../hooks/useAppMutation"
import { useAppQuery } from "../../hooks/useAppQuery"

export const EditNote = () => {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const {
    data,
    loading: loadingGet,
    error: errorGet,
  } = useAppQuery<{ note: TNote }>("GET_NOTE", {
    variables: {
      id,
    },
  })
  const [updateNote, { loading: loadingUpdate, error: errorUpdate }] =
    useAppMutation("UPDATE_NOTE", {
      refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
      onCompleted: (data: { updateNote: TNote }) => {
        history.push(`/note/${data.updateNote.id}`)
      },
    })

  const handleSubmit = (note: string) => {
    updateNote({
      variables: {
        id,
        content: note,
      },
    })
  }

  return <NoteForm submit={handleSubmit} noteContent={data?.note.content} />
}
