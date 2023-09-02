import styled, { keyframes } from "styled-components";

const modalopen = keyframes`
  from {
    opacity: 0;
    transform: translateY(-150px);
  }
  to {
    opacity: 1;
  }
`;

// export const Button = styled.button`
//   // ajoutez les styles pour le bouton ici
// `;

// Ajout d'un style pour le fond de la modale
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 7;
`;

export const ModalContainer = styled.div`
  top: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 7;
  overflow-y: auto;
  display: none;
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 15px;
  // background-color: #313552;
  width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px;
  margin: auto;
  margin-bottom: -16px;
  animation: ${modalopen};
  animation-duration: 0.8s;
  @media (max-width: 722px) {
    width: 90%;
  }
`;

export const CloseButton = styled.span`
  cursor: pointer;
  position: absolute;
  right: 3rem;
  top: 2.5rem;
  font-size: 2rem;
`;
