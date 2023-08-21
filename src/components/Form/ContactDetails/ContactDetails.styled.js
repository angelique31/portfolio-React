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
export const Aside = styled.aside`
  margin-left: 130px;

  a {
    color: white;
    animation: ${pulseEffect} 2s infinite;
    &:hover {
      color: #ffb957;
    }
  }

  p {
    font-size: 1.2rem;
    color: #daddee;
    font-family: inherit;
    @media (max-width: 460px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 1115px) {
    margin-left: 0;
  }
`;

export const ContactInfoBox = styled.div`
  margin-top: 50px;
`;

export const Box = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img`
  margin-right: 20px;
`;

export const AddressText = styled.p`
  width: 100%;
  color: #daddee;
`;
