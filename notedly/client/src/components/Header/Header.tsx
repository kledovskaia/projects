import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppQuery } from "../../hooks/useAppQuery"
import { Container, Logo, LogOut, Text } from "./styles"

export const Header = () => {
  const { data } = useAppQuery<{ isLoggedIn: boolean }>("IS_LOGGED_IN")

  const handleLogout = () => {
    localStorage.removeItem("token")
  }

  return (
    <Container>
      <Logo src="/images/logo.png" alt="Notedly" />
      <Text>Notedly</Text>
      {!data?.isLoggedIn && (
        <>
          <Link to="/sign-in">SignIn</Link>
          <Link to="/sign-up">SignUp</Link>
        </>
      )}
      {data?.isLoggedIn && <LogOut onClick={handleLogout}>LogOut</LogOut>}
    </Container>
  )
}
