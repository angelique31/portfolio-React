import { useState } from "react";
import NavTitle from "../NavTitle/NavTitle";
import { NavBarStyled } from "./NavBarColor.styled";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import NavLinks from "../../NavLinks/NavLinks";
import LanguageSelector from "../../LangageSelector/LangageSelector";
import PropTypes from "prop-types";

const NavBarColor = ({ isScrolled, onAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBarStyled className={isScrolled ? "scrolled" : ""}>
      <MenuHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <NavTitle isScrolled={isScrolled} />

      <NavLinks
        isOpen={isOpen}
        isScrolled={isScrolled}
        onAboutClick={onAboutClick}
      />
      <LanguageSelector />
    </NavBarStyled>
  );
};

NavBarColor.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
  onAboutClick: PropTypes.func.isRequired,
};

export default NavBarColor;
