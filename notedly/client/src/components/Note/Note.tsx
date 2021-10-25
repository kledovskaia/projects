import { FC } from "react"
import { stopBubbling } from "../../helpers/functions"
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
  return (
    <Container>
      <Header>
        <AuthorContainer onClick={stopBubbling}>
          <AuthorPhoto src={note.author.avatar} alt={note.author.username} />
          <AuthorName>{note.author.username}</AuthorName>
        </AuthorContainer>
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
