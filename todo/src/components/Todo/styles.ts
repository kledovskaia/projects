import styled from "styled-components"
import macro from "styled-components/macro"

export const Task = styled.li``

type ContentProps = {
  dataDone: boolean
}
export const TaskContent = styled.button<ContentProps>`
  color: ${({ dataDone }) => (dataDone ? "#999" : "#000")};
`

export const ToggleTask = styled.button`
  height: 1.4rem;
  width: 1.4rem;
`
export const RemoveTask = styled.button`
  height: 1.4rem;
  width: 1.4rem;
`
