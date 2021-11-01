import {
  ChangeEvent,
  createRef,
  FC,
  FormEvent,
  useEffect,
  useState,
} from 'react'
import { Form, Input, Submit } from './styles'

type Props = {
  action: (input: string) => void
}

export const NewItemForm: FC<Props> = ({ action }) => {
  const [value, setValue] = useState('')
  const inputRef = createRef<HTMLInputElement>()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

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
