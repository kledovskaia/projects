import { NoteFeed } from "../../components/NoteFeed/NoteFeed"
import { NoteGrid } from "../../components/NoteGrid/NoteGrid"
import { useAppQuery } from "../../hooks/useAppQuery"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"

export const Favorites = () => {
  useDocumentTitle("Favorites")
  const { data, loading, error } =
    useAppQuery<{ me: { favorites: TNote[] } }>("GET_FAVORITE_NOTES")

  return (
    <NoteGrid>
      {data && data.me && <NoteFeed notes={data.me.favorites} />}
    </NoteGrid>
  )
}
