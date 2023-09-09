import styled from "styled-components";

export const NavBarStyled = styled.nav`
  background-color: rgba(78, 76, 76, 0.8);
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 20px 10px 20px;
  transition: all 0.6s ease;
  box-shadow: inset 0px -1px 0px #c5c5c6; /*pour faire la bordure sous la barre de navigation*/
  &.scrolled {
    height: 50px;
  }
  @media (max-width: 1010px) {
    position: fixed;
    background: rgb(78, 76, 76);
  }
`;
