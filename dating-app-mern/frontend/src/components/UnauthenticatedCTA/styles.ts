import { Link } from "react-router-dom";
import styled from "styled-components";
import macro from "styled-components/macro";

export const CTAContainer = styled.section`
  padding-top: 5rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin-bottom: 1.5rem;
  }
`;

export const CTATitle = styled.h1`
  font-size: 2rem;
  text-shadow: 0.03em 0.03em red;
`;

export const CTADescription = styled.p`
  background: url("/images/heart.png") center center / contain no-repeat;
  min-height: 25rem;
  min-width: 25rem;

  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 3rem;
  text-align: center;
`;

export const CTALinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

export const CTALinkMain = styled(Link)`
  display: block;
  padding: 0.35rem;
  min-width: 20rem;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1.3rem;
  text-decoration: none;
  font-weight: bold;
  text-shadow: 0.03em 0.03em #000;
  background-color: #fb4929;
  transition: background-color 0.1s;

  &:hover {
    background-color: #f72f19;
  }
`;

export const CTALink = styled(Link)`
  display: block;
  padding: 0.35rem;
  min-width: 20rem;
  border-radius: 0.25rem;
  color: #000;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: bold;
  text-shadow: 0.03em 0.03em red;
`;
