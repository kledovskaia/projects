import styled from "styled-components"
import macro from "styled-components/macro"

export const Task = styled.li`
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-gap: 1.5rem;
  margin-bottom: 1.8rem;
`

type TaskDone = {
  dataDone: boolean
}
export const TaskContent = styled.button<TaskDone>`
  display: block;
  color: ${({ dataDone }) => (dataDone ? "#666" : "#000")};
  text-align: left;
  padding: 0.25em;
  border: 0;
  font-size: 1.6rem;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.2s;
  word-wrap: break-word;
  max-width: 37rem;
`

export const ToggleTask = styled.button<TaskDone>`
  cursor: pointer;
  margin-top: 0.7em;
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  outline: 0.2rem solid #ccc;
  outline-offset: 0.3rem;
  border: 0;
  background-color: ${({ dataDone }) => (dataDone ? "#23a3ff" : "transparent")};

  transition: background-color 0.2s;
`
export const RemoveTask = styled.button`
  cursor: pointer;
  margin-top: 0.5em;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 0;
  background-color: #e85c5c;

  svg {
    fill: #fff;
    width: 1rem;
  }
`
