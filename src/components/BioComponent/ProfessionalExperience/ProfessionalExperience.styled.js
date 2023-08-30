import styled, { keyframes } from "styled-components";

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

export const TimelineContainer = styled.div`
  position: relative;
  margin: 70px 0 30px 0;
  .visible & {
    animation: ${fadeInText} 1.5s forwards;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background-color: #e0e0e0;
  }
`;

export const Event = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: ${(props) =>
    props.$side === "left" ? "flex-end" : "flex-start"};
  padding: 20px 0;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Dot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + 1px), -50%);
  width: 16px;
  height: 16px;
  background-color: #e5a048;
  border-radius: 50%;
  z-index: 1;
  transition: transform 0.3s ease;

  &:hover {
    // transform: translate(-50%, -50%) scale(1.2);
    transform: translate(calc(-50% + 1px), -50%) scale(1.2);
  }
`;

export const EventDetails = styled.div`
  width: calc(50% - 24px);
  background-color: rgb(49, 53, 82);
  padding: 15px 25px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  z-index: 0;
  transition: transform 0.3s ease;

  ${(props) =>
    props.side === "left" ? "margin-right: 1px;" : "margin-left: 1px;"}

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Position = styled.h4`
  font-weight: bold;
  font-size: 1.1rem;
  color: rgb(209, 213, 219);
`;

export const Institution = styled.span`
  display: block; // pour le rendre plus distinct
  font-weight: 600;
  color: rgb(209, 213, 219);
  margin-top: 5px;
`;

export const Duration = styled.span`
  display: block; // pour le rendre plus distinct
  font-size: 0.9rem;
  color: rgb(209, 213, 219);
  margin-top: 5px;
`;

export const Description = styled.p`
  font-size: 0.85rem;
  color: rgb(209, 213, 219);
  margin-top: 10px;
`;

export const Arrow = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;

  transform: translateX(calc(-50% + 1px));
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid #e5a048;
`;
