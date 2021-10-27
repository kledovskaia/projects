import { createContext, FC, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"

export const AuthContext = createContext<{
  isLoggedIn: boolean
  logout: () => void
  login: (token: string) => void
}>(null!)

const protectedPaths = ["/my-notes", "/favorites"]

export const AuthProvider: FC = ({ children }) => {
  const history = useHistory()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(null!)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  useEffect(() => {
    if (token) setIsLoggedIn(true)
    if (!token) setIsLoggedIn(false)
  }, [token])

  useEffect(() => {
    if (!isLoggedIn && protectedPaths.includes(location.pathname))
      history.push("/")
  }, [isLoggedIn])

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
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
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
