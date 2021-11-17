import { FC, useContext } from "react"
import { EditModeContext } from "../../context/editMode"
import { useAppDispatch } from "../../hooks/redux"
import { todosActions } from "../../redux/todos"
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
        <RemoveTask
          onClick={removeTask}
          onKeyDown={(e) => e.key === "Enter" && removeTask()}
          aria-label="Remove Task"
        />
      ) : (
        <ToggleTask
          onClick={toggleDone}
          onKeyDown={(e) => e.key === "Enter" && toggleDone()}
          aria-label={`Mark Task as ${todo.done ? "undone" : "done"}`}
        />
      )}
      <TaskContent
        onClick={isEditMode ? handleSelect : toggleDone}
        onKeyDown={(e) =>
          e.key === "Enter" && isEditMode ? handleSelect() : toggleDone()
        }
        aria-label={
          isEditMode
            ? `Mark Task as ${todo.done ? "undone" : "done"}`
            : "Edit Task Content"
        }
        dataDone={todo.done}
      >
        {todo.content}
      </TaskContent>
    </Task>
  )
}
