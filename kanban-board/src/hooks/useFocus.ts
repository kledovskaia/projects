import { createRef, useEffect } from 'react'

export const useFocus = <T extends HTMLElement>() => {
  const ref = createRef<T>()

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return ref
}
