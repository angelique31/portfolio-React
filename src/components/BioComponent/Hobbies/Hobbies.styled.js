import styled from "styled-components";

export const InterestsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;
  background-color: rgb(49, 53, 82); // une couleur cohérente avec le reste
  border-radius: 15px;
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
