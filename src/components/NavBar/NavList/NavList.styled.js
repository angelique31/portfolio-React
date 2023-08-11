import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;

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
    padding: 5px 25px;
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    &:hover {
      color: #ffb957;
      border: none;
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

export const LanguageDropdown = styled.div`
  position: relative;
  display: inline-block;

  button {
    color: white;

    border-radius: 0;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1px 6px;
    background-color: #dfe0dc;

    img {
      width: 20px;
      display: flex;
    }
  }
`;

export const FlagContainer = styled.div`
  padding: 1px 6px;
  background-color: #dfe0dc;
`;

export const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  background-color: #313552;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 20px;
  padding: 10px 30px;
  @media (max-width: 500px) {
    padding: 5px 30px;
  }
  div {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    margin: 5px 0;
    &:hover {
      color: #ffb957;
    }

    img {
      width: 20px;
    }
  }
`;
