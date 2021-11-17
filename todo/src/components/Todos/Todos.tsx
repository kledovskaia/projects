import { useAppSelector } from "../../hooks/redux"
import { Todo } from "../Todo/Todo"
import { Message, TodosContainer, TodosList } from "./styles"

export const isToday = (date: Date) => {
  const now = new Date()
  const midnigth = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    0,
    0,
    0
  )
  return midnigth < date
}

export const Todos = () => {
  const todos = useAppSelector((state) =>
    state.todos.todos.filter((todo) => isToday(todo.createdAt))
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
