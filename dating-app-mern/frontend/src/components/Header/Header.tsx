import {
  Notifications,
  NotificationsActive,
  Person,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { Link, useMatch } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import {
  HeaderContainer,
  LogoAnimated,
  LogoContainer,
  LogoInner,
  LogoStatic,
} from "./styles";

export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const match = useMatch("/");

  return (
    <HeaderContainer>
      {isAuthenticated ??
        (isAuthenticated && (
          <Link to="/profile">
            <IconButton>
              <Person />
            </IconButton>
          </Link>
        ))}
      <LogoContainer>
        <Link to="/">
          <LogoInner>
            <LogoStatic
              className={!match ? "static" : ""}
              src="/images/logo.png"
              alt=""
            />
            <LogoAnimated
              className={!match ? "animated" : ""}
              src="/images/logo.gif"
              alt=""
            />
          </LogoInner>
        </Link>
      </LogoContainer>
      {isAuthenticated ??
        (isAuthenticated && (
          <Link to="/matches">
            <IconButton>
              <Notifications />
            </IconButton>
            <IconButton>
              <NotificationsActive className="notifications_active" />
            </IconButton>
          </Link>
        ))}
    </HeaderContainer>
  );
};
