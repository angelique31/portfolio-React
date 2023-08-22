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
  //   display: none;
  // position: absolute;
  // width: 100%;
  // z-index: 8;
  top: 108px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 7; // Assurez-vous que ce nombre est assez élevé pour être au-dessus des autres éléments
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: #313552;
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
  @media (max-width: 598px) {
    padding: 10px 10px 10px 20px;
  }
`;

export const HeaderModal = styled.div`
  text-align: center;
  color: #d1d5db;
  line-height: 2.5rem;
  margin-bottom: 30px;
`;

export const CloseButton = styled.span`
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  top: 0.4rem;
  font-size: 2rem;
`;

export const StyledH2 = styled.h2`
  font-size: 1rem;
  margin-top: 20px;
  @media (max-width: 1050px) {
    font-size: O.9rem;
  }
`;

export const ContactLeftStyled = styled.div`
  width: 100%;

  @media (max-width: 1115px) {
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  margin-left: 130px;
  @media (max-width: 860px) {
    margin-left: 10px;
  }
`;

export const ButtonDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  color: #d1d5db;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const StyledInput = styled.input`
  height: 45px;
  width: 70%;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.9);
  outline: none;
  margin-bottom: 5px;
  margin-top: 10px;
  color: white;
  padding-left: 20px;
  &::placeholder {
    color: #daddee;
    font-size: 1rem;
    padding-left: 10px;
    opacity: 0.6;
  }
  &:hover {
    border-color: #ffc576;
  }
  @media (max-width: 990px) {
    width: 85%;
  }

  @media (max-width: 549px) {
    font-size: 0.8rem;
  }
  &::placeholder {
    font-size: 0.6rem;
  }
  @media (max-width: 1165px) {
    padding-left: 5px;
  }

  @media (max-width: 396px) {
    padding-left: 2px;
  }
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  font-size: 1rem;
  height: 100px;

  width: 85%;
  background-color: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.9);
  border-radius: 15px;
  outline: none;
  margin-bottom: 5px;
  margin-top: 10px;
  color: white;
  padding-left: 20px;
  padding-top: 20px;
  &::placeholder {
    color: #daddee;
    font-size: 1rem;
    opacity: 0.6;
  }
  &:hover {
    border-color: #ffc576;
  }

  @media (max-width: 460px) {
    font-size: 1rem;
  }
  &::placeholder {
    font-size: 0.8rem;
  }
`;

export const StyledButton = styled.input.attrs({ type: "submit" })`
  font-size: 0.8rem;
  font-family: inherit;
  color: #ffb957;
  margin: 20px 0;
  width: 110px;
  height: 40px;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  background-color: transparent;
  border: 1px solid #ffb957;
  color: #daddee;
  transition: 0.6s;

  &:hover {
    background-color: #ffc576;
    color: black;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.1);
  }
  @media (max-width: 860px) {
    margin: 0 0 20px 0;
  }
`;
