import { FC } from 'react'
import { Container, Title } from './styles'

type Props = {
  title: string
}

export const Column: FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
