import { FC } from "react"
import { Link } from "react-router-dom"
import { stopBubbling } from "../../helpers/functions"
import { useAppQuery } from "../../hooks/useAppQuery"
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
} from "./styles"

type Props = {
  note: TNote
}

export const Note: FC<Props> = ({ note }) => {
  const { data } = useAppQuery<{ me: TUser }>("GET_MY_INFO")

  return (
    <Container>
      <Header>
        <AuthorContainer onClick={stopBubbling}>
          <AuthorPhoto src={note.author.avatar} alt={note.author.username} />
          <AuthorName>{note.author.username}</AuthorName>
        </AuthorContainer>
        {data && note.author.id === data.me.id && (
          <Link to={`/edit/${note.id}`}>Edit</Link>
        )}
        <ToggleFavorite>
          <ToggleFavoriteIcon></ToggleFavoriteIcon>
        </ToggleFavorite>
      </Header>
      <Content>{note.content}</Content>
      <Footer>
        <CreatedAt>{note.createdAt}</CreatedAt>
        {note.createdAt !== note.updatedAt && (
          <UpdatedAt>{note.updatedAt}</UpdatedAt>
        )}
      </Footer>
    </Container>
  )
}
