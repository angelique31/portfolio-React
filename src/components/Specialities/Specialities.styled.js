import styled, { keyframes } from "styled-components";

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeInTitle = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.h2`
  .visible & {
    animation: ${fadeInTitle} 1s forwards;
  }
  color: #ffb957;
  padding-top: 90px;
`;

export const SpecialtiesContainer = styled.div`
  text-align: center;
  padding: 30px;
  // background-color: #f4f4f4;
  background: #313552;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 30px 0px 90px 0px;
  opacity: 0;
  .visible & {
    animation: ${fadeIn} 1s forwards;
    animation-delay: 0.5s;
  }
`;

export const LogoItem = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // opacity: 0;

  /* L'animation fadeIn ne se déclenchera que lorsque le parent (SpecialtiesContainer) aura la classe .visible */
  // .visible & {
  //   animation: ${fadeIn} 0.3s forwards;

  //   &:nth-child(1) {
  //     animation-delay: 0.6s;
  //   }

  //   &:nth-child(2) {
  //     animation-delay: 0.9s;
  //   }

  //   &:nth-child(3) {
  //     animation-delay: 1.2s;
  //   }

  //   &:nth-child(4) {
  //     animation-delay: 1.5s;
  //   }
  // }
`;

export const LogoImage = styled.img`
  width: 100px;
  height: auto;
  &.react-logo {
    animation: ${AppLogoSpin} 20s linear infinite;
  }
  &.sass-logo {
    width: 90px;
  }

  &.git-logo {
    width: 70px;
  }
`;

export const LogoText = styled.p`
  margin-top: 10px;
  // color: #e93de6;
  color: #d1d5db;
  font-weight: 600;
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: center;
  filter: brightness(120%) saturate(110%);
`;
