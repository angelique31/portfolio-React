import styled, { keyframes } from "styled-components";

export const pulseEffect = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);  
    opacity: 0.7;          
  }
`;

export const ContactInfoBox = styled.div`
  margin-right: 165px;
  a {
    color: white;
    animation: ${pulseEffect} 2s infinite;
    &:hover {
      color: #ffb957;
    }
  }

  p {
    font-size: 0.9rem;
    color: #daddee;
    font-family: inherit;
    @media (max-width: 600px) {
      font-size: 0.8rem;
      min-width: 150px;
    }
    @media (max-width: 460px) {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 1115px) {
    margin-right: 112px;
  }
`;

export const Box = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const LogoImage = styled.img`
  margin-right: 20px;
`;

export const AddressText = styled.p`
  width: 100%;
  color: #daddee;
`;
