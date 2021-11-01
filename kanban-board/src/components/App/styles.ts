import styled from 'styled-components'
import macro from 'styled-components/macro'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 35rem));
  grid-template-rows: 1fr;
  grid-gap: 2.5rem;
  padding: 2.5rem;
`
