import styled, { keyframes } from "styled-components";

const fadeInText = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  .visible & {
    animation: ${fadeInText} 1.5s forwards;
  }
  @media (max-width: 905px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CategoryContainer = styled.div`
  padding: 20px;
  border: 1px solid rgba(255, 197, 118, 0.4);
  transition: box-shadow 0.3s ease;
  background-color: rgb(49, 53, 82);
  box-shadow: 0 1px 0 0 rgba(255, 197, 118, 0.75);
  border-radius: 8px 8px 0 0;
  &:hover {
    box-shadow: 0 5px 0 0 rgba(255, 197, 118, 0.75);
  }
`;

export const CategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Skill = styled.span`
  display: inline-block;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 20px;
  border: 2px solid rgba(255, 197, 118, 0.4);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px); // Un petit effet de soulèvement au survol
    border-color: rgb(255, 197, 118);
  }
`;
