import styled from "styled-components";

export const ConfirmationModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: rgba(78, 76, 76, 0.9);
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ConfirmationModalContent = styled.div`
  width: 80%;
  position: relative;
  max-width: 500px;
  background-color: rgb(49, 53, 82);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const ConfirmationModalCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: rgb(209, 213, 219);
  &:hover {
    color: #ffb957;
  }
`;

export const ConfirmationModalH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: rgb(209, 213, 219);
`;

export const StyledParagraph = styled.p`
  color: rgb(209, 213, 219);
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  font-family: inherit;
  color: #ffb957;
  margin: 30px 0 20px 0;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  bottom: 5px;
  left: 35px;
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
  @media (max-width: 1115px) {
    position: static;
    margin: auto;
  }
  @media (max-width: 460px) {
    width: 140px;
    height: 59px;
    font-size: 1rem;
  }
`;
