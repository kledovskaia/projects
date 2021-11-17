import { FC, useContext } from "react"
import { EditModeContext } from "../../context/editMode"
import { useAppDispatch } from "../../hooks/redux"
import { todosActions } from "../../redux/todos"
import { Minus } from "../icons/Minus"
import { RemoveTask, Task, TaskContent, ToggleTask } from "./styles"

type Props = {
  todo: TTodo
}

export const Todo: FC<Props> = ({ todo }) => {
  const { setTodoOnEdit, isEditMode } = useContext(EditModeContext)
  const dispatch = useAppDispatch()

  const handleSelect = () => {
    setTodoOnEdit(todo)
  }

  const toggleDone = () => {
    dispatch(todosActions.toggleDone(todo.id))
  }

  const removeTask = () => {
    dispatch(todosActions.remove(todo.id))
  }

  return (
    <Task>
      {isEditMode ? (
        <RemoveTask onClick={removeTask}>
          <Minus />
        </RemoveTask>
      ) : (
        <ToggleTask dataDone={todo.done} onClick={toggleDone} />
      )}
      <TaskContent
        onClick={isEditMode ? handleSelect : toggleDone}
        dataDone={todo.done}
      >
        {todo.content}
      </TaskContent>
    </Task>
  )
}
