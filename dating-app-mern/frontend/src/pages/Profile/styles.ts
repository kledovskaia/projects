import styled from "styled-components"
import macro from "styled-components/macro"

export const ProfileContainer = styled.section`
  max-width: 50rem;
  margin: 0 auto;
  padding-top: 7rem;
  overflow: hidden;
`
export const Header = styled.div`
  display: flex;
  border-bottom: 0.05rem solid #ccc;
  padding-bottom: 2rem;
`
export const PhotoContainer = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &:hover {
    button {
      transform: translate(0, 0);
    }
  }
`
export const UploadPhoto = styled.button`
  cursor: pointer;
  flex: 1;
  border-radius: 0;
  border: 0;
  padding: 0.25em 0 0.5em;
  transition: background-color 0.2s, transform 0.2s;
  transform: translate(0, 110%);
`
export const Photo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`
export const Info = styled.div`
  flex: 1;
  padding: 0.5em 1.3em;
`
export const Name = styled.h1``
export const Age = styled.p``
export const Logout = styled.button`
  cursor: pointer;
  padding: 0.5em;
  border: 0;
  background-color: transparent;
  margin: 0 1em;
`
export const ProfileInfoForm = styled.form`
  max-width: 40rem;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1em;
  }

  textarea,
  input {
    border: 0.05rem solid #ccc;
    border-radius: 0.5em;
    padding: 0.5em;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    transition: border-color 0.2s;
    &:focus {
      outline: 0;
      border-color: #f72f1966;
    }
  }
`
export const Input = styled.input``
export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  min-height: 10rem;
`
export const Submit = styled.button`
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.75em;
  color: #fb4929;
  background-color: transparent;
  border: 0.05rem solid #f72f19;
  border-radius: 0.5em;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f72f1911;
  }
`
