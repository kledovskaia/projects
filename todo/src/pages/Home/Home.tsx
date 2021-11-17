import { useContext } from "react"
import { Header } from "../../components/Header/Header"
import { Plus } from "../../components/icons/Plus"
import { Todos } from "../../components/Todos/Todos"
import { EditModeContext } from "../../context/editMode"
import { ToggleTodoModal } from "./styles"

export const Home = () => {
  const { toggleAddTodo } = useContext(EditModeContext)

  return (
    <>
      <Header />
      <Todos />
      <ToggleTodoModal onClick={toggleAddTodo}>
        <Plus />
      </ToggleTodoModal>
    </>
  )
}
