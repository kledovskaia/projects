import { FC, useEffect, useState } from 'react'
import { NewItemForm } from '../NewItemForm/NewItemForm'
import { Container, Toggle } from './styles'

export type Props = {
  type: 'task' | 'list'
  action: (input: string) => void
}

export const AddItem: FC<Props> = ({ type, action }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!isActive) return
    const clickHandler = () => setIsActive(false)
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsActive(false)
    }
    document.body.addEventListener('click', clickHandler)
    document.body.addEventListener('keydown', keydownHandler)
    return () => {
      document.body.removeEventListener('click', clickHandler)
      document.body.removeEventListener('keydown', keydownHandler)
    }
  }, [isActive])

  const handleAction = (content: string) => {
    action(content)
    if (type === 'task') return
    setIsActive(false)
  }

  return (
    <Container>
      {!isActive && (
        <Toggle addType={type} onClick={() => setIsActive(true)}>
          + Add anoter {type}
        </Toggle>
      )}
      {isActive && <NewItemForm action={handleAction} />}
    </Container>
  )
}
