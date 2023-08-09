import styled, { keyframes } from "styled-components";

const rotate = keyframes`
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

export const Container = styled.div`
  position: relative;
  background: rgb(78, 76, 76);
`;

export const Title = styled.h2`
  .visible & {
    animation: ${fadeInTitle} 1s forwards;
  }
  text-align: center;
  margin-bottom: 20px;
  padding-top: 20px;
  color: #ffb957;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1010px) {
    flex-direction: column-reverse;
    height: 524px;
  }
  @media (max-width: 446px) {
    height: 624px;
  }
`;

export const BioText = styled.p`
  font-size: 0.9rem;
  margin-top: 40px;
  line-height: 1.5;
  width: 600px;
  text-align: justify;
  color: #d1d5db;
  @media (max-width: 665px) {
    width: 500px;
  }
  @media (max-width: 550px) {
    width: 400px;
  }
  @media (max-width: 446px) {
    width: 300px;
  }
`;

export const SunWrapper = styled.div`
  width: 345px;
  height: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillTab = styled.div`
  width: 160px;
  height: 40px;
  background: #f4f4f4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 50%;
  text-align: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${({ color }) => color || "#f4f4f4"};
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  @media (max-width: 470px) {
    width: 130px;
    height: 30px;
  }
`;

export const SkillText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-38%) translateY(-50%);
  padding: 20px;
  opacity: 0.8;
  @media (max-width: 470px) {
    font-size: 0.7rem;
  }
`;

export const RotateContainer = styled.div`
  animation: ${rotate} 100s linear infinite;
  height: 300px;

  transform: translate(0, -50%);
  @media (max-width: 470px) {
    height: 200px;
  }
`;

export const CenterCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
