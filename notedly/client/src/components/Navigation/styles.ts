import styled from "styled-components"
import macro from "styled-components/macro"

export const Container = styled.nav`
  background-color: #fff;
  background-color: #faedcd;
`

export const List = styled.ul`
  padding: 1rem 0;
  list-style: none;
  a {
    position: relative;
    display: block;
    padding: 1.5rem 2rem;
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    font-style: italic;

    display: flex;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0;
      background-color: #fff;
      transition: width 0.2s;
    }

    &.active,
    &:hover {
      &::before {
        width: 100%;
      }
    }
    &:hover {
      [src$="gif"] {
        z-index: 1;
        opacity: 1;
      }
      [src$="svg"] {
        z-index: 0;
        opacity: 0;
      }
    }
  }
  &::last-child a {
    padding-bottom: 2rem;
  }
`

export const Logo = styled.img`
  position: absolute;
  z-index: 1;
  max-width: 3rem;
  transition: opacity ease-in-out 0.1s;
`
export const LogoAnimated = styled.img`
  position: absolute;
  opacity: 0;
  max-width: 3rem;
  background: #000;
  transition: opacity ease-in-out 0.1s;
`
export const Text = styled.span`
  position: relative;
  z-index: 1;
  padding: 0 1.5rem;
  padding-left: 4.5rem;
`
