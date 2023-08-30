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

export const FormationContainer = styled.div`
  margin: 50px 0;
  .visible & {
    animation: ${fadeInText} 1.5s forwards;
  }
`;

export const Card = styled.div`
  background-color: rgb(49, 53, 82);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

export const DateRange = styled.span`
  font-size: 0.9rem;
  color: rgb(209, 213, 219);
  margin-right: 20px;
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #e5a048;
  border-radius: 50%;
  margin-right: 15px;
  flex-shrink: 0; /* Empêche l'icône de réduire sa taille en cas de flex-wrap */
`;

export const FormationTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
