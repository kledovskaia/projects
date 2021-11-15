import { createContext, FC, useEffect, useState } from "react";

export const AuthContext = createContext<{
  logout: () => void;
  isAuthenticated: boolean | null;
}>(null!);

export const AuthContextProvider: FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(null!);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("dating-app-token"));
  }, [localStorage.getItem("dating-app-token")]);

  const logout = () => {
    localStorage.removeItem("dating-app-token");
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
