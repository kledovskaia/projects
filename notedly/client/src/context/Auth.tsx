import { createContext, FC, useState } from "react"

export const AuthContext = createContext<{
  isLoggedIn: boolean
  logout: () => void
  login: (token: string) => void
}>(null!)

export const AuthProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setIsLoggedIn(false)
  }

  const login = (token: string) => {
    localStorage.setItem("token", token)
    setToken(token)
    setIsLoggedIn(true)
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
