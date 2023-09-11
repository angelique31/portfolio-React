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

const fadeInText = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animation pour l'étoile
const fadeInSun = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: relative;
  // background: rgb(78, 76, 76);
  background: #313552;
  height: 600px;
  @media (max-width: 1010px) {
    height: 900px;
  }
  @media (max-width: 610px) {
    height: 1000px;
  }
`;

export const Title = styled.h2`
  .visible & {
    animation: ${fadeInTitle} 1s forwards;
  }
  text-align: center;
  margin-bottom: 50px;
  padding-top: 120px;
  color: #ffb957;
  @media (max-width: 1010px) {
    margin-bottom: 100px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1010px) {
    flex-direction: column;
    height: 524px;
  }
  @media (max-width: 446px) {
    height: 624px;
  }
`;

export const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  width: 600px;
  text-align: justify;
  color: #d1d5db;
  opacity: 0;
  transform: translateY(10px);
  transition: all 1s;
  .visible & {
    animation: ${fadeInText} 1.5s forwards 1s; // 1s delay after the title
  }
  @media (max-width: 1010px) {
    margin-bottom: 85px;
  }
  @media (max-width: 665px) {
    width: 500px;
  }
  @media (max-width: 550px) {
    width: 400px;
    font-size: 1rem;
  }
  @media (max-width: 446px) {
    width: 300px;
  }
`;

export const Highlighted = styled.strong`
  font-weight: bold;
  color: #ffb957;
`;

export const SunWrapper = styled.div`
  width: 345px;
  height: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0.9);
  transition: all 1s;
  .visible & {
    animation: ${fadeInSun} 1.5s forwards 1.3s;
  }
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
  transform: ${({ $rotation }) => `rotate(${$rotation}deg)`};
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
