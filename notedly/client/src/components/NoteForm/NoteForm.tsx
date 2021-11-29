import { ChangeEvent, FC, FormEvent, useState } from "react"
import { Button, Container, Form, TextArea } from "./styles"

type Props = {
  submit: (note: string) => void
  noteContent?: string
}

export const NoteForm: FC<Props> = ({ submit, noteContent = "" }) => {
  const [note, setNote] = useState(noteContent)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setNote(e.target.value)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!note.trim()) return
    submit(note.trim())
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextArea value={note} onChange={handleChange} />
        <Button>Add</Button>
      </Form>
    </Container>
  )
}
