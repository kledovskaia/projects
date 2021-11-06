import { Forum, Person } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {
  HeaderContainer,
  LogoAnimated,
  LogoContainer,
  LogoStatic,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <IconButton>
        <Person />
      </IconButton>
      <LogoContainer>
        <LogoStatic src="/images/logo.png" alt="" />
        {/* <LogoAnimated src="/images/logo.gif" alt="" /> */}
      </LogoContainer>
      <IconButton>
        <Forum />
      </IconButton>
    </HeaderContainer>
  );
};
