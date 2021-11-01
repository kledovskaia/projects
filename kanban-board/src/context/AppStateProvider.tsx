import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

const initialState = {
  lists: [] as List[],
}

export const AppStateContext = createContext<
  [typeof initialState, Dispatch<SetStateAction<typeof initialState>>]
>(null!)

export const AppStateProvider: FC = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <AppStateContext.Provider value={[state, setState]}>
      {children}
    </AppStateContext.Provider>
  )
}
