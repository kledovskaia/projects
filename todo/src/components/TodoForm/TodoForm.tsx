import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { EditModeContext } from "../../context/editMode"
import { useAppDispatch } from "../../hooks/redux"
import { todosActions } from "../../redux/todos"
import {
  ButtonsContainer,
  Cancel,
  Form,
  Input,
  Overlay,
  Submit,
} from "./styles"

export const TodoForm = () => {
  const dispatch = useAppDispatch()
  const { todoOnEdit, setTodoOnEdit } = useContext(EditModeContext)
  const [value, setValue] = useState(
    todoOnEdit && "content" in todoOnEdit ? todoOnEdit.content : ""
  )

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
      setTodoOnEdit(null)
    }
  }

  return (
    <Overlay>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Введите текст задачи"
          value={value}
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Cancel type="button" onClick={() => setTodoOnEdit(null)}>
            Закрыть
          </Cancel>
          <Submit>
            {todoOnEdit && "id" in todoOnEdit ? "Сохранить" : "Добавить"}
          </Submit>
        </ButtonsContainer>
      </Form>
    </Overlay>
  )
}
