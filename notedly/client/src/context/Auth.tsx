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
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    if (!token && protectedPaths.includes(location.pathname)) history.push("/")
  }, [token])

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setIsLoggedIn(false)
  }

  const login = (token: string) => {
    localStorage.setItem("token", token)
    setToken(token)
    setIsLoggedIn(true)
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
