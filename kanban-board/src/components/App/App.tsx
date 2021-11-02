import { useAppState } from '../../hooks/useAppState'
import { AddItem } from '../AddItem/AddItem'
import { Column } from '../Column/Column'
import { Container } from './styles'
import { addList, addTask } from '../../state/AC'

export type HandleAddTask = (
  listId: TList['id']
) => (text: TTask['text']) => void

type HandleAddList = (title: TList['title']) => void

export const App = () => {
  const { lists, dispatch } = useAppState()

  const handleAddList: HandleAddList = (title) => {
    dispatch?.(addList(title))
  }

  const handleAddTask: HandleAddTask = (listId) => (text) => {
    dispatch?.(
      addTask({
        listId,
        text,
      })
    )
  }

  return (
    <Container>
      {lists.map((list) => (
        <Column
          title={list.title}
          key={list.id}
          id={list.id}
          action={handleAddTask}
        />
      ))}
      <AddItem type="list" action={handleAddList} />
    </Container>
  )
}
