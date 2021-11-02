import { FC } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd'
import { reorder } from '../../helpers/arrayUtils'
import { useAppState } from '../../hooks/useAppState'
import { setTasks } from '../../state/AC'
import { Container, Item } from './styles'

type Props = {
  id: TList['id']
}

export const Card: FC<Props> = ({ id }) => {
  const { dispatch, getTasksByListId } = useAppState()
  const tasks = getTasksByListId?.(id)

  type OnDragEnd = (result: DropResult, provided: ResponderProvided) => void
  const onDragEnd: OnDragEnd = (result) => {
    if (!result.destination) return
    if (
      result.destination.droppableId !== result.source.droppableId ||
      result.destination.index === result.source.index
    )
      return
    if (!tasks) return

    dispatch?.(
      setTasks({
        tasks: reorder(tasks, result.destination.index, result.source.index),
        listId: id,
      })
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {tasks?.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <Item
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {task.text}
                  </Item>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  )
}
