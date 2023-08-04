import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const IntroContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: ${fadeIn} 2s ease-in-out;
  border: 2px solid #fff;
  padding: 20px;
  border-radius: 15px;
  background-color: rgb(78, 76, 76);
  width: 67%;
  opacity: 0.9;
  display: flex;
  align-items: center;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  color: white;
  cursor: pointer;
`;

export const IntroImage = styled.img`
  width: 300px;

  transition: opacity 0.5s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export const IntroTitle = styled.span`
  color: #fff;
  font-size: 1.5rem;
  text-align: left;
`;

export const IntroHighlight = styled.span`
  color: #e93de6;
  font-weight: 100;
`;

export const NameSpan = styled.span``;
export const IntroSubtitle = styled.div`
  color: #fff;
  font-size: 1.2rem;
  padding: 20px 0px 10px 0px;
`;

export const IntroDescription = styled.div`
  color: #fff;
  font-size: 1rem;
  font-style: italic;
`;
