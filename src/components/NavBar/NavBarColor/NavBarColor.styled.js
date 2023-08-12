import styled from "styled-components";

export const NavBarStyled = styled.nav`
  // background: rgb(78, 76, 76);
  background-color: rgba(78, 76, 76, 0.7);
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 10px 20px;
  transition: all 0.6s ease;
  box-shadow: inset 0px -1px 0px #c5c5c6; /*pour faire la bordure sous la barre de navigation*/
  &.scrolled {
    height: 50px;
  }
`;
