import { AddItem } from '../AddItem/AddItem'
import { Card } from '../Card/Card'
import { Column } from '../Column/Column'
import { Container } from './styles'

export const App = () => {
  return (
    <Container>
      <Column title="Some title">
        <Card>Hello!</Card>
        <AddItem type="task" action={() => {}} />
      </Column>
      <AddItem type="list" action={() => {}} />
    </Container>
  )
}
