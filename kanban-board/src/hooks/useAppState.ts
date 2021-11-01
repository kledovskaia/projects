import { useContext } from 'react'
import { AppStateContext } from '../context/AppStateProvider'

export const useAppState = () => {
  return useContext(AppStateContext)
}
