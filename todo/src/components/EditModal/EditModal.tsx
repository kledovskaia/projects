import { useContext } from "react"
import ReactDOM from "react-dom"
import { EditModeContext } from "../../context/editMode"
import { TodoForm } from "../TodoForm/TodoForm"

export const EditModal = () => {
  const { todoOnEdit } = useContext(EditModeContext)

  return todoOnEdit
    ? ReactDOM.createPortal(<TodoForm />, document.getElementById("modal")!)
    : null
}
