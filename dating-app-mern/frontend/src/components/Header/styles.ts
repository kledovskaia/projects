import styled from "styled-components";
import macro from "styled-components/macro";

export const HeaderContainer = styled.header`
  background-color: #fff;
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

export const LogoInner = styled.div`
  position: relative;
  height: 2rem;
  width: 2rem;

  &:hover {
    .static {
      z-index: 0;
      opacity: 0;
    }
    .animated {
      z-index: 1;
      opacity: 1;
    }
  }
`;

export const LogoStatic = styled.img`
  position: absolute;
  opacity: 1;
  transition: opacity 0.1s;
`;
export const LogoAnimated = styled.img`
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s;
`;
