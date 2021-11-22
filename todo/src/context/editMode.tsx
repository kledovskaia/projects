import { createContext, FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { todosActions } from "../redux/todos"

type EditModeContextProps = {
  isEditMode: boolean
  todoOnEdit: TTodo | {} | null
  toggleEditMode: () => void
  setTodoOnEdit: (todo: TTodo | null) => void
  toggleAddTodo: () => void
}

export const EditModeContext = createContext({} as EditModeContextProps)

export const EditModeContextProvider: FC = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const todoOnEdit = useAppSelector((state) => state.todos.todoOnEdit)
  const hasTodos = useAppSelector((state) => !!state.todos.todos.length)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!hasTodos) setIsEditMode(false)
  }, [hasTodos])

  useEffect(() => {
    return () => {
      dispatch(todosActions.setTodoOnEdit(null))
    }
  }, [])

  const toggleEditMode = () => {
    setIsEditMode((state) => !state)
  }

  const setTodoOnEdit = (todo: TTodo | null) => {
    dispatch(todosActions.setTodoOnEdit(todo))
  }

  const toggleAddTodo = () => {
    dispatch(todosActions.setTodoOnEdit({}))
  }

  return (
    <EditModeContext.Provider
      value={{
        isEditMode,
        todoOnEdit,
        toggleEditMode,
        setTodoOnEdit,
        toggleAddTodo,
      }}
    >
      {children}
    </EditModeContext.Provider>
  )
}
