import { FC } from "react"
import { Link } from "react-router-dom"
import { Note } from "../Note/Note"

type Props = {
  notes: TNote[]
}

export const NoteFeed: FC<Props> = ({ notes }) => {
  return (
    <>
      {notes.map((note: TNote) => (
        <Link to={`note/${note.id}`} key={note.id}>
          <Note note={note} />
        </Link>
      ))}
    </>
  )
}
