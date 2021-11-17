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
      {!hasTodos && todoOnEdit && (
        <ToggleEditMode onClick={toggleEditMode}>Отменить</ToggleEditMode>
      )}
      {hasTodos && (
        <ToggleEditMode onClick={toggleEditMode}>
          {!isEditMode && "Править"}
          {isEditMode && "Отменить"}
        </ToggleEditMode>
      )}
    </HeaderContainer>
  )
}
