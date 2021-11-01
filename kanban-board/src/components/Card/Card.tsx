import { FC } from 'react'
import { Container, Item } from './styles'

export const Card: FC = ({ children }) => {
  return (
    <Container>
      {Array.isArray(children) ? (
        children.map((item) => <Item key={item}>{item}</Item>)
      ) : (
        <Item key={children?.toString()}>{children}</Item>
      )}
    </Container>
  )
}
