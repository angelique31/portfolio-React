import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 15px 0;
  color: white;
`;

export const SharedContainerStyles = `
  border: 1px solid rgba(255, 197, 118, 0.4);
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: rgb(49, 53, 82);
  &:hover {
    border-color: #ffc576;

    ${SectionTitle} {
      color: #ffc576;
    }
  }
`;

export const SharedTextStyles = `
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(209, 213, 219);
  margin-top: 20px;
`;

export const ProjectDetailContainer = styled.div`
  padding: 115px 7%;
  color: #333;
  background-color: rgb(31, 34, 53);
`;

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 514px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  ${SharedContainerStyles}
  margin: 70px 0;
  width: 100%;
`;

export const ObjectiveContainer = styled(Container)`
  width: 70%;
  margin: 70px auto;
  @media (max-width: 872px) {
    width: 100%;
  }
`;

export const ChallengeContainer = styled(Container)`
  width: 70%;
  margin: 70px auto;

  @media (max-width: 872px) {
    margin: 80px 0;
    width: 100%;
  }
`;

export const ResponsiveContainer = styled(Container)`
  width: 50%;

  @media (max-width: 1060px) {
    width: 70%;
  }
  @media (max-width: 514px) {
    margin: 20px 0;
  }
`;

export const AlignedImageContainer = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;

  @media (max-width: 1060px) {
    flex-direction: column;
  }
`;

export const AccessibilityContainer = styled(Container)``;
export const CollaborationContainer = styled(Container)``;
export const TechnologyContainer = styled(Container)`
  margin: 20px 0;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  color: #ffb957;
`;

export const StyledAnchorLink = styled.a`
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 5px;
  border: 1px solid #ffb957;
  color: #ffc576;
  font-size: 0.9rem;
  cursor: pointer;

  transition: box-shadow 0.2s;
  box-shadow: 0 0 10px rgba(255, 185, 87, 0.6);

  &:hover {
    background-color: #ffb957;
    color: #313552;
    box-shadow: 2px 1px 0px rgba(255, 185, 87, 0.8);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 1px 7px rgba(255, 185, 87, 0.6);
  }

  @media (max-width: 514px) {
    margin: 20px;
  }
`;

const StyledText = styled.p`
  ${SharedTextStyles}
`;

export const TextParagraph = styled(StyledText)``;

export const UnorderedList = styled.ul`
  ${SharedTextStyles}
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

const StyledImage = styled.img`
  display: block;
  border-radius: 7px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 462px;

  @media (max-width: 872px) {
    margin-top: 50px;
  }
`;

export const ImageChallengeContainer = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 532px) {
    flex-direction: column;
  }
`;

export const ProjectImage = styled(StyledImage)`
  width: 60%;
  height: 200px;

  @media (max-width: 872px) {
    margin: auto;
  }

  @media (max-width: 532px) {
    width: 100%;
  }
`;

export const AccessibilityImage = styled(StyledImage)`
  width: 100%;
  max-width: 300px;
  max-height: 462px;
  margin: 30px auto;
`;

export const MobileImage = styled(StyledImage)`
  height: 300px;
  max-width: 300px;

  @media (max-width: 872px) {
    margin: auto;
  }
`;
