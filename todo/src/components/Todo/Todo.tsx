import { FC, useContext } from "react"
import { EditModeContext } from "../../context/editMode"

type Props = {
  todo: TTodo
}

export const Todo: FC<Props> = ({ todo }) => {
  const { setTodoOnEdit } = useContext(EditModeContext)

  const handleSelect = () => {
    setTodoOnEdit(todo)
  }

  return <div onClick={handleSelect}>{todo.content}</div>
}
