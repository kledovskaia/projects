import { useEffect, useRef } from 'react'

export const useFocus = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return ref
}
