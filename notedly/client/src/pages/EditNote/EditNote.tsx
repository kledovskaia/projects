import { useContext } from 'react'
import { useHistory, useParams } from 'react-router'
import { NoteForm } from '../../components/NoteForm/NoteForm'
import { AuthContext } from '../../context/Auth'
import { GET_MY_NOTES, GET_NOTES } from '../../graphql/queries'
import { useAppMutation } from '../../hooks/useAppMutation'
import { useAppQuery } from '../../hooks/useAppQuery'

export const EditNote = () => {
  const { data: userData } = useContext(AuthContext)
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const {
    data,
    loading: loadingGet,
    error: errorGet,
  } = useAppQuery<{ note: TNote }>('GET_NOTE', {
    variables: {
      id,
    },
  })

  const [updateNote, { loading: loadingUpdate, error: errorUpdate }] =
    useAppMutation('UPDATE_NOTE', {
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

  return (
    <>
      {errorGet !== undefined && <>{errorGet && <h1>Not Found</h1>}</>}
      {data && data.note.author.id !== userData?.id && (
        <h1>You don't have access to edit this note</h1>
      )}
      {data && !errorGet && data.note.author.id === userData?.id && (
        <NoteForm submit={handleSubmit} noteContent={data?.note.content} />
      )}
    </>
  )
}
