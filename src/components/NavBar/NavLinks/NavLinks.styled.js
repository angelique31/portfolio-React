import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 1009px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 33px;
    position: absolute;
    top: 100%;
    background: rgb(70, 70, 70);
    padding: 15px 22px 15px 20px;
    border-right: 1px solid #c5c5c6;
    height: 100vh;
    left: -212px; /*pour cacher vers la gauche les li*/
    transition: 0.5s ease-out;
    ${({ $isOpen }) =>
      $isOpen &&
      `
      left: 0;
      z-index: 2;
    `}
  }
`;

export const StyledNavItem = styled.li`
  a,
  a:visited,
  button {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 20px;
    padding: 15px 0;
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    position: relative; 
    overflow: hidden; // pour s'assurer que l'animation reste à l'intérieur du lien
    font-size: ${(props) => (props.$isScrolled ? "0.8rem" : "1.1rem")};
    // &::after {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   bottom: 0; 
    //   left: 0;
    //   width: 0; 
    //   height: 2px; 
    //   background-color: #ffb957;
    //   transition: width 0.4s ease; 
      
    // }

    &:hover {
        color: #ffb957; 
  
        &::after {
          width: 100%;
        }
      }
  }
  
    @media (max-width: 1009px) {
      border: none;
      padding: 0;

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        transform: scaleX(0);
        transform-origin: left;
        background: white;
        transition: transform 0.3s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
      }
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* noir avec 70% d'opacité */
  z-index: 1;
  display: none; /* Par défaut, il sera caché */

  ${({ $isOpen }) =>
    $isOpen &&
    `
    display: block;
    
  `}
`;

export const StyledDownloadButton = styled.a`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const StyledIcon = styled.img`
  height: 15px;
  margin-right: 5px;
  margin-bottom: 3px;
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.span`
  position: relative;
  &:hover::after {
    width: 100%;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ffb957;
    transition: width 0.4s ease;
  }
`;
