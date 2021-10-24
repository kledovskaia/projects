import { FC } from "react"
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
        <AuthorContainer>
          <AuthorPhoto />
          <AuthorName></AuthorName>
        </AuthorContainer>
        <ToggleFavorite>
          <ToggleFavoriteIcon></ToggleFavoriteIcon>
        </ToggleFavorite>
      </Header>
      <Content></Content>
      <Footer>
        <CreatedAt></CreatedAt>
        <UpdatedAt></UpdatedAt>
      </Footer>
    </Container>
  )
}
