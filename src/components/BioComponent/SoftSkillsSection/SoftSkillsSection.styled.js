// SkillsSection.styled.js

// import styled from "styled-components";
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

export const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .visible & {
    animation: ${fadeInText} 1.5s forwards;
  }
`;
