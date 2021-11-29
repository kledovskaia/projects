import { useContext, useEffect } from "react"
import { EditModeContext } from "../../context/editMode"
import { isToday } from "../../helpers/isToday"
import { useAppSelector } from "../../hooks/redux"
import { HeaderContainer, Title, ToggleEditMode } from "./styles"

export const Header = () => {
  const { isEditMode, toggleEditMode } = useContext(EditModeContext)
  const hasTodos = useAppSelector(
    (state) =>
      !!state.todos.todos.filter((todo) => isToday(todo.timestamp)).length
  )

  useEffect(() => {
    console.log(hasTodos)
  }, [hasTodos])

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
