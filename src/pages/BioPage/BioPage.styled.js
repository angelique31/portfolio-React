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

export const BioContainer = styled.div`
  padding: 115px 7%;
  color: rgb(209, 213, 219);
  background-color: rgb(31, 34, 53);
`;

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  color: #ffb957;
  margin-bottom: 50px;
`;

export const BioDescription = styled.p`
  margin: 20px 0;
  font-size: 1.3rem;
  .visible & {
    animation: ${fadeInText} 1.5s forwards;
  }
`;

export const SectionTitle = styled.h2`
  margin: 100px 0 70px 0;
`;
