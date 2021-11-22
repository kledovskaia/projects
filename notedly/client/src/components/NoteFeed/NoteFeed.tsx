import { FC } from 'react'
import { Note } from '../Note/Note'

type Props = {
  notes: TNote[]
}

export const NoteFeed: FC<Props> = ({ notes }) => {
  return (
    <>
      {notes.map((note: TNote) => (
        <Note key={note.id} note={note} />
      ))}
    </>
  )
}
