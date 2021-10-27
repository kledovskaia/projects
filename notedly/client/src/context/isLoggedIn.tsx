import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react"

export const IsLoggedInContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>(null!)

export const IsLoggedInProvider: FC = ({ children }) => {
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(!!localStorage.getItem("token"))
  }, [localStorage.getItem("token")])

  return (
    <IsLoggedInContext.Provider value={[state, setState]}>
      {children}
    </IsLoggedInContext.Provider>
  )
}
