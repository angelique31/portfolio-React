import styled from "styled-components";

export const CardContainer = styled.div`
  width: 150px;
  height: 150px;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.6s;
  transform: ${(props) =>
    props.$flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  transform-style: preserve-3d;
  &:hover {
    animation-name: flipHint;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }

  @keyframes flipHint {
    0% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(15deg);
    }
    50% {
      transform: rotateY(0deg);
    }
    75% {
      transform: rotateY(-15deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;

  backface-visibility: hidden;
  transform: rotateY(0deg);
`;

export const CardBack = styled(CardFront)`
  background: #e9e9e9;
  transform: rotateY(180deg);
`;
