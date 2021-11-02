import styled from 'styled-components'
import macro from 'styled-components/macro'

export const Container = styled.section`
  display: flex;
  padding: 2.5rem;

  & > * {
    flex-basis: 30rem;
    flex-shrink: 0;
  }

  & > *:not(:last-child) {
    margin-right: 2.5rem;
  }
`
