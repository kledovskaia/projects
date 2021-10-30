import { NavLink } from "react-router-dom"
import { Container, List, Logo, LogoAnimated, Text } from "./styles"

export const Navigation = () => {
  return (
    <Container>
      <List>
        <li>
          <NavLink exact to="/">
            <Logo src="/images/home.svg" />
            <LogoAnimated src="/images/home.gif" />
            <Text>Home</Text>
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-notes">
            <Logo src="/images/note.svg" />
            <LogoAnimated src="/images/note.gif" />
            <Text>My Notes</Text>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            <Logo src="/images/favorites.svg" />
            <LogoAnimated src="/images/favorites.gif" />
            <Text>Favorites</Text>
          </NavLink>
        </li>
      </List>
    </Container>
  )
}
