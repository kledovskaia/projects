import { createContext, Dispatch, FC, SetStateAction, useState } from "react"

export const IsLoggedInContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>(null!)

export const IsLoggedInProvider: FC = ({ children }) => {
  const [state, setState] = useState(false)

  return (
    <IsLoggedInContext.Provider value={[state, setState]}>
      {children}
    </IsLoggedInContext.Provider>
  )
}
