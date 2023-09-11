import styled, { keyframes } from "styled-components";

const borderColorChange = keyframes`
0%, 100% {
  border-color: rgba(255, 197, 118, 0.4);
}
50% {
  border-color: #ffb957;
}
`;

export const Skill = styled.h3`
  font-size: 1rem;

  margin: 15px 0;
  color: white;
  text-align: center;
`;

export const SkillContainer = styled.div`
  border: 1px solid rgba(255, 197, 118, 0.4);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  padding: 20px;
  background-color: rgb(49, 53, 82);

  color: white;
  font-weight: bold;
  margin: 10px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  // &.clickable {
  //   animation: ${borderColorChange} 3s ease-in-out infinite;
  // }
  animation: ${borderColorChange} 3s ease-in-out infinite;
  &:hover {
    border-color: rgb(255, 197, 118);
    ${Skill} {
      color: #ffc576;
    }
  }
`;

export const TooltipText = styled.span`
  width: 200px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};

  /* Positionnement du tooltip */
  position: absolute;
  z-index: 10;
  bottom: 100%; /* Place le tooltip au-dessus de l'élément */
  left: 50%;
  margin-left: -100px; /* Permet de centrer le tooltip */

  /* Effets */

  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%; /* Place la flèche sous le tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;
