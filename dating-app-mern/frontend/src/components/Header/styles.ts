import styled from "styled-components";
import macro from "styled-components/macro";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  padding: 1rem;
  box-shadow: 0 0 0.25rem #999;
`;
export const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    max-width: 2rem;
  }
`;
export const LogoStatic = styled.img``;
export const LogoAnimated = styled.img``;
