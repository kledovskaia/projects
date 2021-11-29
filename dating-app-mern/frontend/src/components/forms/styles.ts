import styled from "styled-components"
import macro from "styled-components/macro"

export const FormContainer = styled.section`
  padding: 2em 0;
  max-width: 25rem;
  width: 95vw;
  margin: 0 auto;

  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 0.5em;
    }
  }
`

export const FormTitle = styled.h1`
  text-align: center;
  padding: 0.5em;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.25rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`

export const FormLabel = styled.label`
  padding: 0.25em 0;
  color: #333;
`

export const FormError = styled.p`
  color: red;
  font-size: 0.9rem;
`

export const FormButton = styled.button`
  cursor: pointer;
  display: block;
  padding: 0.65em;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: bold;
  text-shadow: 0.03em 0.03em #000;
  background-color: #fb4929;
  border: 0.1rem solid #f72f19;
  transition: background-color 0.1s;

  &:hover {
    background-color: #f72f19;
  }
`

export const FormRedirect = styled.p`
  padding: 1.5em 0 0;
  text-align: center;

  a {
    display: inline-block;
    text-decoration: none;
    padding: 0 1em;
  }
`
