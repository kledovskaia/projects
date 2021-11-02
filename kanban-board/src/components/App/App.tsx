import { useAppState } from '../../hooks/useAppState'
import { AddItem } from '../AddItem/AddItem'
import { Column } from '../Column/Column'
import { Container } from './styles'

export const App = () => {
  const { lists } = useAppState()

  return (
    <Container>
      {lists.map((list) => (
        <Column title={list.title} key={list.id} id={list.id} />
      ))}
      <AddItem type="list" action={() => {}} />
    </Container>
  )
}
