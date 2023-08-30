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

export const InterestsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;
  background-color: rgb(49, 53, 82); // une couleur cohérente avec le reste
  border-radius: 15px;
  .visible & {
    animation: ${fadeInText} 1.5s forwards;
  }
`;

export const InterestItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 30%;
  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const LogoImage = styled.img``;

export const InterestText = styled.p`
  font-size: 1.1rem;
  color: rgb(209, 213, 219);
`;
