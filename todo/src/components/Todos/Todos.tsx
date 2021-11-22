import { isToday } from "../../helpers/isToday"
import { useAppSelector } from "../../hooks/redux"
import { Todo } from "../Todo/Todo"
import { Message, TodosContainer, TodosList } from "./styles"

export const Todos = () => {
  const todos = useAppSelector((state) =>
    state.todos.todos.filter((todo) => isToday(todo.timestamp))
  )

  return (
    <TodosContainer>
      {!todos.length && <Message>Список задач пуст</Message>}
      {!!todos.length && (
        <TodosList>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </TodosList>
      )}
    </TodosContainer>
  )
}
