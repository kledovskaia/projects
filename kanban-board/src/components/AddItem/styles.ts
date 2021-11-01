import styled from 'styled-components'
import macro from 'styled-components/macro'

export const Container = styled.div`
  align-self: flex-start;
`

type Props = {
  addType: 'task' | 'list'
}

export const Toggle = styled.button<Props>`
  color: ${(props) => (props.addType === 'task' ? 'currentColor' : '#fff')};
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: left;
  border: 0;
  background-color: #ffffff44;
  padding: 1rem;
  border-radius: 0.5rem;
`
