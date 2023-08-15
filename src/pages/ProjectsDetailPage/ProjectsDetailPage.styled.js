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
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 15px;
  color: white;
`;

export const ProjectDetailContainer = styled.div`
  padding: 115px 7%;
  color: #333;
  background-color: rgb(31, 34, 53);
`;

export const IntroContainer = styled.div`
  margin-bottom: 50px;
`;

export const ObjectiveContainer = styled.div`
  ${SharedContainerStyles}

  width: 70%;
  margin: 70px 0;
  &:hover {
    ${SectionTitle} {
      color: #ffc576;
    }
  }
  @media (max-width: 872px) {
    width: 100%;
    margin: 0;
  }
`;

export const ChallengeContainer = styled.div`
  ${SharedContainerStyles}
  width: 60%;
  float: right;
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
  margin-bottom: 20px;
  color: #ffb957;
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

export const ProjectImage = styled.img`
  width: 100%;
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
