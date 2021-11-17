import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { EditModeContext } from "../../context/editMode"
import { useAppDispatch } from "../../hooks/redux"
import { todosActions } from "../../redux/todos"

export const TodoForm = () => {
  const dispatch = useAppDispatch()
  const { todoOnEdit, toggleEditMode } = useContext(EditModeContext)
  const [value, setValue] = useState(
    todoOnEdit && "content" in todoOnEdit ? todoOnEdit.content : ""
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const formattedValue = value.trim().replace(/\s+/g, " ")
    if (formattedValue) {
      if (todoOnEdit && "id" in todoOnEdit) {
        dispatch(
          todosActions.changeContent({
            targetId: todoOnEdit.id,
            newContent: value,
          })
        )
      } else {
        dispatch(todosActions.add(value))
      }
      setValue("")
      toggleEditMode()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}
