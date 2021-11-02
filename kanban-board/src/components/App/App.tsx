import { useAppState } from '../../hooks/useAppState'
import { AddItem } from '../AddItem/AddItem'
import { Card } from '../Card/Card'
import { Column } from '../Column/Column'
import { Container } from './styles'

export const App = () => {
  const { lists } = useAppState()

  return (
    <Container>
      {lists.map((list) => (
        <Column title={list.text} key={list.id}>
          <Card>{list.tasks}</Card>
          <AddItem type="task" action={() => {}} />
        </Column>
      ))}
      <AddItem type="list" action={() => {}} />
    </Container>
  )
}
