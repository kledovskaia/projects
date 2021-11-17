import styled from "styled-components"
import macro from "styled-components/macro"

export const ToggleTodoModal = styled.button`
  cursor: pointer;
  background-color: white;
  border: 0;
  padding: 1em;
  border-radius: 50%;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  position: fixed;
  bottom: 5vw;
  right: 5vw;
  box-shadow: 0 0 4rem #999;

  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`
