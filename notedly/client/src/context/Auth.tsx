import { createContext, FC, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import { useAppQuery } from "../hooks/useAppQuery"

export const AuthContext = createContext<{
  isLoggedIn: boolean
  logout: () => void
  login: (token: string) => void
  data?: TUser
}>(null!)

const protectedPaths = ["/my-notes", "/favorites"]

export const AuthProvider: FC = ({ children }) => {
  const history = useHistory()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(null!)
  const [token, setToken] = useState<string>(null!)
  const { data, fetchMore } = useAppQuery<{ me: TUser }>("GET_MY_INFO")

  useEffect(() => {
    setToken(localStorage.getItem("token") || "")
  }, [])

  useEffect(() => {
    if (isLoggedIn) fetchMore({})
  }, [isLoggedIn])

  useEffect(() => {
    if (token === null) return
    if (token) setIsLoggedIn(true)
    if (!token) setIsLoggedIn(false)
  }, [token])

  useEffect(() => {
    if (isLoggedIn === null) return
    if (!isLoggedIn && protectedPaths.includes(location.pathname))
      history.push("/")
  }, [isLoggedIn])

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
  }

  const login = (token: string) => {
    localStorage.setItem("token", token)
    setToken(token)
    history.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        data: data?.me,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
