import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// export const WheelWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   width: 300px;
//   height: 300px;
//   margin: 0 auto;
//   overflow: visible;
//   transform-origin: center;
//   animation: ${rotate} 100s linear infinite;
// `;

export const SkillTab = styled.div`
  width: 160px;
  height: 40px;
  background: #f4f4f4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 50%;
  text-align: center;
  background: ${({ color }) => color || "#f4f4f4"};
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
`;

export const SkillText = styled.p`
  margin: 0;
  font-size: 14px;
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-38%) translateY(-50%);
  padding: 20px;
`;

export const RotateContainer = styled.div`
  // width: 100%;
  height: 100%;
  position: relative;
  transform-origin: center center;
  animation: ${rotate} 100s linear infinite;
  height: 300px;
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
