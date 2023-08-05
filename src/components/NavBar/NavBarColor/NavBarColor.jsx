import { useState } from "react";
import NavList from "../NavList/NavList";
import NavTitle from "../NavTitle/NavTitle";
import { NavBarStyled } from "./NavBarColor.styled";
import MenuHamburger from "../MenuHamburger/MenuHamburger";

const NavBarColor = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavBarStyled>
      <NavTitle />
      <MenuHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <NavList isOpen={isOpen} />
    </NavBarStyled>
  );
};

export default NavBarColor;
