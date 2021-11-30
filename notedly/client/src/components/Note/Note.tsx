import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/Auth'
import {
  GET_FAVORITE_NOTES,
  GET_MY_NOTES,
  GET_NOTES,
} from '../../graphql/queries'
import { stopBubbling } from '../../helpers/functions'
import { useAppMutation } from '../../hooks/useAppMutation'
import {
  AuthorContainer,
  AuthorName,
  AuthorPhoto,
  Content,
  CreatedAt,
  Footer,
  Container,
  Header,
  ToggleFavorite,
  ToggleFavoriteIcon,
  UpdatedAt,
} from './styles'

type Props = {
  note: TNote
}

export const Note: FC<Props> = ({ note }) => {
  const { data, isLoggedIn } = useContext(AuthContext)
  const [toggleFavorite, { loading: loadingToggle, error: errorToggle }] =
    useAppMutation('TOGGLE_FAVORITE', {
      refetchQueries: [
        { query: GET_NOTES },
        { query: GET_MY_NOTES },
        { query: GET_FAVORITE_NOTES },
      ],
    })
  const [deleteNote, { loading: loadingDelete, error: errorDelete }] =
    useAppMutation('DELETE_NOTE', {
      refetchQueries: [
        { query: GET_NOTES },
        { query: GET_MY_NOTES },
        { query: GET_FAVORITE_NOTES },
      ],
    })

  return (
    <Container>
      <Header>
        <AuthorContainer onClick={stopBubbling}>
          <AuthorPhoto src={note.author.avatar} alt={note.author.username} />
          <AuthorName>{note.author.username}</AuthorName>
        </AuthorContainer>
        {data && note.author.id === data.id && (
          <>
            <Link to={`/edit/${note.id}`}>Edit</Link>
            <button
              onClick={(e) => {
                e.stopPropagation()
                deleteNote({
                  variables: {
                    id: note.id,
                  },
                })
              }}
            >
              Delete
            </button>
          </>
        )}
        {isLoggedIn && (
          <ToggleFavorite
            onClick={(e) => {
              e.stopPropagation()
              toggleFavorite({
                variables: {
                  id: note.id,
                },
              })
            }}
          >
            Favorite
            <ToggleFavoriteIcon />
          </ToggleFavorite>
        )}
      </Header>
      <Link to={`/note/${note.id}`}>
        <Content>{note.content}</Content>
      </Link>
      <Footer>
        <CreatedAt>{note.createdAt}</CreatedAt>
        {note.createdAt !== note.updatedAt && (
          <UpdatedAt>{note.updatedAt}</UpdatedAt>
        )}
        <div>{note.favoriteCount}</div>
      </Footer>
    </Container>
  )
}
