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

export const ModalContainer = styled.div`
  //   display: none;
  position: absolute;
  width: 100%;
  z-index: 8;
  top: 108px;
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: #313552;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 35px 35px 100px 35px;
  margin: auto;
  margin-bottom: -16px;
  animation: ${modalopen};
  animation-duration: 0.8s;
`;

export const HeaderModal = styled.div`
  text-align: center;
  color: #d1d5db;
  margin: 40px 0;
  line-height: 2.5rem;
`;

export const CloseButton = styled.span`
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  top: 0.4rem;
  font-size: 2rem;
`;

export const StyledH2 = styled.h2`
  font-size: 1.5rem;
  @media (max-width: 1050px) {
    font-size: 1.3rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  align-items: flex-start;
  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactLeftStyled = styled.div`
  width: 50%;
  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  color: #d1d5db;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const StyledInput = styled.input`
  height: 68px;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.9);
  outline: none;
  margin-bottom: 20px;
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
  @media (max-width: 460px) {
    font-size: 1rem;
  }
  &::placeholder {
    font-size: 0.8rem;
  }
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  font-size: 1rem;
  height: 170px;
  width: 100%;
  background-color: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.9);
  border-radius: 15px;
  outline: none;
  margin-bottom: 20px;
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
  font-size: 1.2rem;
  font-family: inherit;
  color: #ffb957;
  margin: 20px 0;
  width: 170px;
  height: 59px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: auto;
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
`;
