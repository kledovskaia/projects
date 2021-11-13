import {
  Notifications,
  NotificationsActive,
  Person,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LogoAnimated,
  LogoContainer,
  LogoInner,
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
          <LogoInner>
            <LogoStatic className="static" src="/images/logo.png" alt="" />
            <LogoAnimated className="animated" src="/images/logo.gif" alt="" />
          </LogoInner>
        </Link>
      </LogoContainer>
      <Link to="/matches">
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <NotificationsActive className="notifications_active" />
        </IconButton>
      </Link>
    </HeaderContainer>
  );
};
