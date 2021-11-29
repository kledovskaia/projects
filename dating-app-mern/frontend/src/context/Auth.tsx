import { createContext, FC, useEffect, useState } from "react";
import { useAppQuery } from "../hooks/useAppQuery";

export const AuthContext = createContext<{
  logout: () => void;
  login: (token: string) => void;
  isAuthenticated: boolean | null;
  data?: TUser;
}>(null!);

export const AuthContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(null!);
  const [token, setToken] = useState<string>(null!);
  const { data, fetchMore } = useAppQuery<{ getMyInfo: TUser }>("GET_MY_INFO");

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  useEffect(() => {
    if (isLoggedIn) fetchMore({});
  }, [isLoggedIn]);

  useEffect(() => {
    if (token === null) return;
    if (token) setIsLoggedIn(true);
    if (!token) setIsLoggedIn(false);
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        login,
        isAuthenticated: isLoggedIn,
        data: data?.getMyInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
