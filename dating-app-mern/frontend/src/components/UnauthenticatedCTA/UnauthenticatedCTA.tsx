import {
  CTAContainer,
  CTADescription,
  CTALink,
  CTALinkMain,
  CTALinks,
  CTATitle,
} from "./styles";

export const UnauthenticatedCTA = () => {
  return (
    <CTAContainer>
      <CTATitle>Welcome to yet another Dating App</CTATitle>
      <CTADescription>
        Here you can find <br />
        your true love <br /> or <br />
        sexually transmitted <br /> diseases. <br />
        Good luck.
      </CTADescription>
      <CTALinks>
        <CTALinkMain to="/sign-up">Registration</CTALinkMain>
        <CTALink to="/sign-in">I already have an account</CTALink>
      </CTALinks>
    </CTAContainer>
  );
};
