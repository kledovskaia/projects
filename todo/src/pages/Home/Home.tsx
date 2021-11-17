import { useContext } from "react"
import { Header } from "../../components/Header/Header"
import { Todos } from "../../components/Todos/Todos"
import { EditModeContext } from "../../context/editMode"
import { ToggleTodoModal } from "./styles"

export const Home = () => {
  const { toggleAddTodo } = useContext(EditModeContext)

  return (
    <>
      <Header />
      <Todos />
      <ToggleTodoModal
        onClick={toggleAddTodo}
        onKeyDown={(event) => event.key === "Enter" && toggleAddTodo()}
      >
        Add
      </ToggleTodoModal>
    </>
  )
}
