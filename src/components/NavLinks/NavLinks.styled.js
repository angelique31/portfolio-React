import styled from "styled-components";

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
    /* background: #5472ae; */
    // background: #bb5cba;
    background: rgb(70, 70, 70);
    padding: 15px 22px 15px 20px;
    border-right: 1px solid #c5c5c6;
    height: 100vh;
    left: -181px; /*pour cacher vers la gauche les li*/
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

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0; 
      left: 0;
      width: 0; 
      height: 2px; 
      background-color: #ffb957;
      transition: width 0.4s ease; 
      
    }

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