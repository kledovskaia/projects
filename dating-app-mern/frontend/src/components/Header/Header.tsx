import { Forum, NotificationsActive, Person } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LogoAnimated,
  LogoContainer,
  LogoStatic,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/profile">
        <IconButton>
          <Person />
        </IconButton>
      </Link>
      <LogoContainer>
        <Link to="/">
          <LogoStatic src="/images/logo.png" alt="" />
          {/* <LogoAnimated src="/images/logo.gif" alt="" /> */}
        </Link>
      </LogoContainer>
      <Link to="/matches">
        <IconButton>
          <NotificationsActive />
        </IconButton>
      </Link>
    </HeaderContainer>
  );
};
