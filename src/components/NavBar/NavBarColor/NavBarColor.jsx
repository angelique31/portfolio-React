import NavList from "../NavList/NavList";
import NavTitle from "../NavTitle/NavTitle";
import { NavBarStyled } from "./NavBarColor.styled";

const NavBarColor = () => {
  return (
    <NavBarStyled>
      <NavTitle />
      <NavList />
    </NavBarStyled>
  );
};

export default NavBarColor;
