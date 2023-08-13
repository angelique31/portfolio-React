import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { StyledNavList, StyledNavItem } from "./NavLinks.styled";
import PropTypes from "prop-types";

function NavLinks({ isOpen, isScrolled, onAboutClick, closeMenu }) {
  // ajoutez closeMenu ici
  const { t } = useTranslation();

  return (
    <StyledNavList $isOpen={isOpen}>
      <StyledNavItem className="intro-link" isScrolled={isScrolled}>
        <Link
          onClick={() => {
            onAboutClick();
            closeMenu();
          }}
        >
          {t("Qui je suis?")}
        </Link>
      </StyledNavItem>

      <StyledNavItem isScrolled={isScrolled}>
        <Link to="/cv" onClick={closeMenu}>
          {t("Mon cv")}
        </Link>
      </StyledNavItem>
      <StyledNavItem isScrolled={isScrolled}>
        <a href="#mes-realisations" onClick={closeMenu}>
          {t("Mes réalisations")}
        </a>
      </StyledNavItem>
      <StyledNavItem isScrolled={isScrolled}>
        <Link to="/contact" onClick={closeMenu}>
          {t("Contactez-moi")}
        </Link>
      </StyledNavItem>
    </StyledNavList>
  );
}

NavLinks.displayName = "NavLinks";

NavLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isScrolled: PropTypes.bool.isRequired,
  onAboutClick: PropTypes.func.isRequired,
};

export default NavLinks;
