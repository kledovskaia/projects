import { FC } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useAppState } from '../../hooks/useAppState'
import { Container, Item } from './styles'

type Props = {
  id: TList['id']
}

export const Card: FC<Props> = ({ id }) => {
  const { getTasksByListId } = useAppState()
  const tasks = getTasksByListId?.(id)

  return (
    <Droppable droppableId={id}>
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
  )
}
