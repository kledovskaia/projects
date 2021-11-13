import styled from "styled-components";
import macro from "styled-components/macro";

export const AuthFormContainer = styled.section`
  max-width: 25rem;
  width: 95vw;
  margin: 0 auto;

  min-height: 100vh;
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
`;

export const AuthFormTitle = styled.h1`
  text-align: center;
  padding: 0.5em;
`;

export const AuthFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.25rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

export const AuthFormLabel = styled.label`
  padding: 0.25em 0;
  color: #333;
`;

export const AuthFormError = styled.p`
  color: red;
  font-size: 0.9rem;
`;

export const AuthFormButton = styled.button`
  cursor: pointer;
  padding: 0.75em;
  color: #fff;
  font-weight: bold;
  background-color: rgb(175, 0, 146);
  border: 0.1rem solid rgb(110, 0, 92);
  border-radius: 0.25rem;
`;
