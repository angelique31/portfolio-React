import styled from "styled-components";

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5rem;
  @media (max-width: 1009px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 100%;
    /* background: #5472ae; */
    background: #bb5cba;
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
  a {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    border: 2px solid white;
    border-radius: 20px;
    padding: 5px 25px;

    &:hover {
      background: #e93de680;
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
