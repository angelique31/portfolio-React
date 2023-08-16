import styled from "styled-components";

export const SharedContainerStyles = `
  border: 1px solid rgba(255, 197, 118, 0.4);
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: rgb(49, 53, 82);
  &:hover {
    border-color: #ffc576;
  }
`;

export const SharedTextStyles = `
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(209, 213, 219);
  margin-top: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 15px;
  margin-bottom: 15px;
  color: white;
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

export const ObjectiveContainer = styled.div`
  ${SharedContainerStyles}

  width: 70%;
  margin: 70px auto;
  &:hover {
    ${SectionTitle} {
      color: #ffc576;
    }
  }
  @media (max-width: 872px) {
    width: 100%;
    margin: 0;
    margin-top: 70px;
  }
`;

export const ChallengeContainer = styled.div`
  ${SharedContainerStyles}

  width: 70%;
  margin: 70px auto;
  &:hover {
    ${SectionTitle} {
      color: #ffc576;
    }
  }
  @media (max-width: 872px) {
    width: 100%;
    margin: 80px 0;
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

export const ResponsiveContainer = styled.div`
  ${SharedContainerStyles}
  width: 50%;

  &:hover {
    ${SectionTitle} {
      color: #ffc576;
    }
  }
  @media (max-width: 1060px) {
    width: 70%;
  }
  @media (max-width: 872px) {
    width: 100%;
    margin: 80px 0;
  }
  @media (max-width: 514px) {
    margin: 20px 0;
  }
`;

export const AccessibilityContainer = styled.div`
  ${SharedContainerStyles}
  margin: 70px 0;

  width: 100%;
  &:hover {
    ${SectionTitle} {
      color: #ffc576;
    }
  }
`;

export const CollaborationContainer = styled.div`
  ${SharedContainerStyles}
  margin: 70px 0;
  width: 100%;
  &:hover {
    ${SectionTitle} {
      color: #ffc576;
    }
  }
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

export const TechnologyContainer = styled.div`
  ${SharedContainerStyles}
  margin: 20px 0;
  width: 100%;
  &:hover {
    ${SectionTitle} {
      color: #ffc576;
    }
  }
`;

export const TextParagraph = styled.p`
  ${SharedTextStyles}
`;

export const UnorderedList = styled.ul`
  ${SharedTextStyles}
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
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

export const ProjectImage = styled.img`
  width: 60%;

  display: block;
  border-radius: 7px;
  margin-bottom: 20px;
  height: 200px;
  overflow: hidden;

  @media (max-width: 872px) {
    margin: auto;
  }
  @media (max-width: 532px) {
    width: 100%;
  }
`;

export const AccessibilityImage = styled.img`
  width: 100%;
  max-width: 300px;
  display: block;
  border-radius: 7px;
  margin-bottom: 20px;
  max-height: 462px;
  overflow: hidden;
  margin: auto;
  // @media (max-width: 872px) {
  //   margin: auto;
  // }
`;
export const MobileImage = styled.img`
  height: 300px;
  max-width: 300px;
  display: block;
  border-radius: 7px;
  margin-bottom: 20px;
  max-height: 462px;
  overflow: hidden;
  @media (max-width: 872px) {
    margin: auto;
  }
`;
