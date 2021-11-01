import { FC, useEffect, useState } from 'react'
import { NewItemForm } from '../NewItemForm/NewItemForm'
import { Toggle } from './styles'

type Props = {
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

  return (
    <>
      {!isActive && (
        <Toggle onClick={() => setIsActive(true)}>+ Add anoter {type}</Toggle>
      )}
      {isActive && <NewItemForm action={action} />}
    </>
  )
}
