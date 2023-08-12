import styled from "styled-components";

export const Title = styled.h2`
  color: #ffb957;
  text-align: center;
  margin-bottom: 60px;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8em;
`;
export const ProjectsContainer = styled.section`
  padding: 5em 0;
  background-color: rgb(31, 34, 53);
`;

export const ProjectCard = styled.div`
  margin: 2em;

  width: 400px;
  height: 462px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 10px;
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  border-radius: 12px;
  padding: 5px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectInfoWrapper = styled.div`
  background: #313552;
  padding: 1em;
  margin-top: 10px;
`;

export const ProjectTechnologies = styled.div`
  margin: 1em 0;
  color: #ffb957;
`;

export const ProjectTitle = styled.h3`
  margin-top: 1em;
  color: white;
  font-size: 0.9rem;
`;

export const ProjectDescription = styled.p`
  color: #d1d5db;
  margin: 1em 0;
  font-size: 0.8rem;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1em;
  padding: 0.5em 1em;
  border-radius: 5px;
  border: 1px solid #ffb957;
  color: #ffc576;
  font-size: 0.9rem;
  &:hover {
    background-color: #ffb957;
    color: #313552;
  }
`;
