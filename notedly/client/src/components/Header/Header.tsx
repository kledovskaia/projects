import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/Auth"
import { Container, Logo, LogOut, Text } from "./styles"

export const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext)

  return (
    <Container>
      <Logo src="/images/logo.png" alt="Notedly" />
      <Text>Notedly</Text>
      {!isLoggedIn && (
        <>
          <Link to="/sign-in">SignIn</Link>
          <Link to="/sign-up">SignUp</Link>
        </>
      )}
      {isLoggedIn && <LogOut onClick={logout}>LogOut</LogOut>}
    </Container>
  )
}
