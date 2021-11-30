import styled from "styled-components"
import macro from "styled-components/macro"

export const Container = styled.header`
  padding: 1.5rem;
  background-color: #774936;
  display: flex;
  align-items: center;
  font-family: Galada, sans-serif;
  color: #fff;

  a,
  button {
    cursor: pointer;
    font-size: inherit;
    border: 0;
    background-color: transparent;
    font-family: "Balsamiq Sans", sans-serif;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
    display: block;
    padding: 0 0.5em;
  }
`
export const Logo = styled.img`
  max-width: 5rem;
`

export const Text = styled.h1`
  flex: 1;
  cursor: default;
  padding: 0 0.5rem;
  font-weight: 400;
  text-shadow: 0.3rem 0.3rem #311600;
`

export const LogOut = styled.button``
