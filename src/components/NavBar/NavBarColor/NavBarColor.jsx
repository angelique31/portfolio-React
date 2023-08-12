import { useState } from "react";
import NavTitle from "../NavTitle/NavTitle";
import { NavBarStyled } from "./NavBarColor.styled";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import NavLinks from "../../NavLinks/NavLinks";
import LanguageSelector from "../../LangageSelector/LangageSelector";

const NavBarColor = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBarStyled className={isScrolled ? "scrolled" : ""}>
      <MenuHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <NavTitle isScrolled={isScrolled} />

      <NavLinks isOpen={isOpen} isScrolled={isScrolled} />
      <LanguageSelector />
    </NavBarStyled>
  );
};

export default NavBarColor;
