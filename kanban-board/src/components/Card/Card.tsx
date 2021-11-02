import { FC } from 'react'
import { Container, Item } from './styles'

type Props = {
  children: Task | Task[]
}

export const Card: FC<Props> = ({ children }) => {
  return (
    <Container>
      {Array.isArray(children) ? (
        children.map((item) => <Item key={item.id}>{item.text}</Item>)
      ) : (
        <Item key={children?.toString()}>{children.text}</Item>
      )}
    </Container>
  )
}
