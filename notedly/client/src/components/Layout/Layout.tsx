import styled from "styled-components"
import marco from "styled-components/macro"

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: min-content auto;
  min-height: 100vh;

  & > :first-child {
    grid-column: 1 / -1;
  }
`
