import { useState, useEffect } from "react";
import NavTitle from "../NavTitle/NavTitle";
import { NavBarStyled } from "./NavBarColor.styled";
import { Overlay } from "../NavLinks/NavLinks.styled";

import MenuHamburger from "../MenuHamburger/MenuHamburger";
import NavLinks from "../NavLinks/NavLinks";
import LanguageSelector from "../LangageSelector/LangageSelector";
import PropTypes from "prop-types";

const NavBarColor = ({ isScrolled, isMobile, onAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <NavBarStyled
      className={isScrolled ? "scrolled" : ""}
      $isScrolled={isScrolled}
      $isMobile={isMobile}
    >
      <MenuHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <NavTitle isScrolled={isScrolled} />

      <NavLinks
        closeMenu={() => setIsOpen(false)}
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
  isMobile: PropTypes.bool.isRequired,
};

export default NavBarColor;
