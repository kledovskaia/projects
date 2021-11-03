import styled from "styled-components";
import macro from "styled-components/macro";

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
`;

export const Column = styled.article`
  align-self: flex-start;
  background-color: #f0f1f4;
  border-radius: 0.25rem;
  padding: 1rem;
`;

export const Title = styled.h2`
  padding: 1rem;
`;

export const Card = styled.ul`
  list-style: none;
`;
export const CardItem = styled.li`
  cursor: grab;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.15rem 0.25rem #aaa;
  margin-bottom: 0.5rem;
`;
