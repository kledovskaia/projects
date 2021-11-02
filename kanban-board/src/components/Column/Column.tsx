import { FC } from 'react'
import { useAppState } from '../../hooks/useAppState'
import { AddItem } from '../AddItem/AddItem'
import { HandleAddTask } from '../App/App'
import { Card } from '../Card/Card'
import { Container, Title } from './styles'

type Props = {
  title: string
  id: string
  action: HandleAddTask
}

export const Column: FC<Props> = ({ title, id, action }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Card id={id} />
      <AddItem type="task" action={action(id)} />
    </Container>
  )
}
