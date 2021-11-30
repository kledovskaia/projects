import { useContext } from 'react'
import { AppStateContext } from '../state/AppStateProvider'

export const useAppState = () => {
  return useContext(AppStateContext)
}
