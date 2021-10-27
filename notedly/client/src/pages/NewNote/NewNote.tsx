import { ChangeEvent, FormEvent, useState } from "react"
import { useHistory } from "react-router"
import { GET_NOTES } from "../../graphql/queries"
import { useAppMutation } from "../../hooks/useAppMutation"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { Button, Container, Form, TextArea } from "./styles"

export const NewNote = () => {
  useDocumentTitle("New Note")
  const history = useHistory()
  const [note, setNote] = useState("")
  const [newNote, { loading, error }] = useAppMutation("NEW_NOTE", {
    refetchQueries: [{ query: GET_NOTES }],
    onCompleted: ({ newNote }: { newNote: TNote }) => {
      history.push(`/note/${newNote.id}`)
    },
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!note.trim()) return
    newNote({
      variables: {
        content: note.trim(),
      },
    })
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setNote(e.target.value)

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextArea value={note} onChange={handleChange} />
        <Button>Add</Button>
      </Form>
    </Container>
  )
}
