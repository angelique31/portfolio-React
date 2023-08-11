import { useState } from "react";
// import NavList from "../NavList/NavList";
import NavTitle from "../NavTitle/NavTitle";
import { NavBarStyled } from "./NavBarColor.styled";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import NavLinks from "../../NavLinks/NavLinks";
import LanguageSelector from "../../LangageSelector/LangageSelector";

const NavBarColor = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavBarStyled>
      <MenuHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <NavTitle />

      <NavLinks isOpen={isOpen} />
      <LanguageSelector />
    </NavBarStyled>
  );
};

export default NavBarColor;
