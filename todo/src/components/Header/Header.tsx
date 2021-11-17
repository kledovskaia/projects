import { useContext } from "react"
import { EditModeContext } from "../../context/editMode"
import { useAppSelector } from "../../hooks/redux"
import { HeaderContainer, Title, ToggleEditMode } from "./styles"

export const Header = () => {
  const { isEditMode, toggleEditMode, todoOnEdit } = useContext(EditModeContext)
  const hasTodos = useAppSelector((state) => !!state.todos.todos.length)

  return (
    <HeaderContainer>
      <Title>Сегодня</Title>
      {hasTodos && (
        <ToggleEditMode onClick={toggleEditMode}>
          {isEditMode && "Отменить"}
          {!isEditMode && "Править"}
        </ToggleEditMode>
      )}
    </HeaderContainer>
  )
}
