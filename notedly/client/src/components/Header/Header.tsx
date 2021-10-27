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
      {isLoggedIn !== null && (
        <>
          {!isLoggedIn && (
            <>
              <Link to="/sign-in">SignIn</Link>
              <Link to="/sign-up">SignUp</Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/new">New Note</Link>
              <LogOut onClick={logout}>LogOut</LogOut>
            </>
          )}
        </>
      )}
    </Container>
  )
}
