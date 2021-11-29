import styled from "styled-components"
import macro from "styled-components/macro"

export const NoteGrid = styled.section`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-template-rows: auto;
  gap: 2rem;
`
