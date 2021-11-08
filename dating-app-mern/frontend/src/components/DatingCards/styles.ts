import styled from "styled-components";
import macro from "styled-components/macro";

export const DatingCardsContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DatingCardsTitle = styled.h1``;
export const DatingCardsInnerContainer = styled.div`
  min-height: 20rem;
  min-width: 15rem;
  margin: 1rem 0 2rem;
`;
export const DatingCardsPerson = styled.section`
  overflow: hidden;
  border-radius: 0.5rem;
  min-height: 100%;
  background: url() center center / cover no-repeat;
  display: flex;
  align-items: flex-end;
`;
export const DatingCardsPersonName = styled.h3`
  background-color: rgba(0, 0, 0, 0.5);
  border-top-right-radius: 0.5em;
  color: #fff;
  padding: 0.25em 1em;
  text-shadow: 0.1em 0.1em 0.05rem #333;
`;
