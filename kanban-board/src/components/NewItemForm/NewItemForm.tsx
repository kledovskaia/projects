import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useFocus } from '../../hooks/useFocus'
import { Form, Input, Submit } from './styles'

type Props = {
  action: (input: string) => void
}

export const NewItemForm: FC<Props> = ({ action }) => {
  const [value, setValue] = useState('')
  const inputRef = useFocus<HTMLInputElement>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const formattedValue = value.trim().replace(/\s+/g, ' ')
    if (!formattedValue) return
    action(formattedValue)
  }

  return (
    <Form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
      <Input ref={inputRef} value={value} onChange={handleChange} />
      <Submit>Create</Submit>
    </Form>
  )
}
