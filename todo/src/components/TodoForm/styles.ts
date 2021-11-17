import styled from "styled-components"
import macro from "styled-components/macro"

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`
export const Form = styled.form`
  background-color: #fff;
  position: fixed;
  top: 9rem;
  right: 0;
  left: 0;
  bottom: 0;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;

  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;

  & > * {
    max-width: 50rem;
    width: 90vw;
    margin: 0 auto;
  }
`
export const Input = styled.textarea`
  font-family: inherit;
  resize: vertical;
  min-height: 15rem;
  padding: 1em;
  border: 0.2rem solid #ccc;
  border-radius: 0.5rem;
  transition: border-color 0.2s;

  &:focus {
    outline: 0;
    border-color: #23a3ff;
  }
`
export const Cancel = styled.button`
  background-color: #f2f2f2;
  &:hover {
    background-color: #ddd;
  }
`
export const Submit = styled.button`
  background-color: #23a3ff;
  color: #fff;

  &:hover {
    background-color: #008cf0;
  }
`

export const ButtonsContainer = styled.div`
  padding: 1em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  button {
    cursor: pointer;
    padding: 0.75em;
    border-radius: 0.5em;
    border: 0;
    transition: background-color 0.2s;
  }
`
