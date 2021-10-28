import { useHistory, useRouteMatch } from 'react-router'
import { AuthContext } from '../../context/Auth'
import {
  GET_FAVORITE_NOTES,
  GET_MY_NOTES,
  GET_NOTES,
} from '../../graphql/queries'
import { useAppMutation } from '../../hooks/useAppMutation'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Bookmark, Create, Delete } from '@mui/icons-material'
import { Link } from 'react-router-dom'

type Props = {
  note: TNote
}

export const Note: React.FC<Props> = ({ note }) => {
  const { path } = useRouteMatch<{ path: string }>()
  const history = useHistory()
  const { data, isLoggedIn } = React.useContext(AuthContext)
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
      onCompleted: () => {
        if (path.startsWith('/note')) history.push('/my-notes')
      },
    })

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar alt={note.author.username} src={note.author.avatar}>
            {note.author.username[0]}
          </Avatar>
        }
        action={
          <>
            {data && data.id === note.author.id && (
              <>
                <Link to={`/edit/${note.id}`}>
                  <IconButton aria-label="Edit">
                    <Create />
                  </IconButton>
                </Link>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteNote({
                      variables: {
                        id: note.id,
                      },
                    })
                  }}
                >
                  <Delete />
                </IconButton>
              </>
            )}
          </>
        }
        title={note.author.username}
        subheader={note.createdAt}
      />
      <Link className="defaultLink" to={`/note/${note.id}`}>
        <CardContent>
          <Typography paragraph>{note.content}</Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton
          className={`${
            data && !!note.favoritedBy?.find((user) => user.id === data.id)
              ? 'activeColor'
              : ''
          }`}
          disabled={!isLoggedIn}
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite({
              variables: {
                id: note.id,
              },
            })
          }}
        >
          <Bookmark />
        </IconButton>
        <Typography
          className={`${
            data && !!note.favoritedBy?.find((user) => user.id === data.id)
              ? 'activeColor'
              : ''
          }`}
        >
          {note.favoriteCount}
        </Typography>
      </CardActions>
    </Card>
  )
}
