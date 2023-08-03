// import styled, { keyframes } from "styled-components";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// export const IntroContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   animation: ${fadeIn} 2s ease-in-out;
// `;

// export const IntroImage = styled.img`
//   width: 200px; // You can adjust as needed
//   height: 200px; // You can adjust as needed
//   border-radius: 50%;
//   transition: opacity 0.5s ease-in-out;
//   &:hover {
//     opacity: 0.7;
//   }
// `;

// export const IntroTitle = styled.h1`
//   color: #fff;
//   font-size: 2em;
// `;

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;
  border: 2px solid #fff;
  padding: 20px;
  border-radius: 15px;
  background-color: rgb(78, 76, 76);
  width: 50%;
  opacity: 0.9;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 15px; // Adjust as needed
  top: 15px; // Adjust as needed
  cursor: pointer;
`;

export const IntroImage = styled.img`
  width: 200px; // You can adjust as needed
  height: 200px; // You can adjust as needed
  border-radius: 50%;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export const IntroTitle = styled.h1`
  color: #fff;
  font-size: 2em;
`;
