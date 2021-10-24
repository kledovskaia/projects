import { NavLink } from "react-router-dom"
import * as navigation from "./styles"

export const Navigation = () => {
  return (
    <navigation.Container>
      <navigation.List>
        <li>
          <NavLink exact to="/">
            <navigation.Logo src="/images/home.svg" />
            <navigation.LogoAnimated src="/images/home.gif" />
            <navigation.Text>Home</navigation.Text>
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-notes">
            <navigation.Logo src="/images/note.svg" />
            <navigation.LogoAnimated src="/images/note.gif" />
            <navigation.Text>My Notes</navigation.Text>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            <navigation.Logo src="/images/favorites.svg" />
            <navigation.LogoAnimated src="/images/favorites.gif" />
            <navigation.Text>Favorites</navigation.Text>
          </NavLink>
        </li>
      </navigation.List>
    </navigation.Container>
  )
}
