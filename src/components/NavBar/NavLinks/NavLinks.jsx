import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { StyledNavList, StyledNavItem } from "./NavLinks.styled";
import PropTypes from "prop-types";

function NavLinks({ isOpen, isScrolled, onAboutClick, closeMenu }) {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <StyledNavList $isOpen={isOpen}>
      <StyledNavItem className="intro-link" isScrolled={isScrolled}>
        <Link
          to="/que-suis-je"
          onClick={() => {
            onAboutClick();
            closeMenu();
          }}
        >
          {t("homepage.Qui je suis?")}
        </Link>
      </StyledNavItem>

      <StyledNavItem isScrolled={isScrolled}>
        <Link to="/cv" onClick={closeMenu}>
          {t("homepage.Mon cv")}
        </Link>
      </StyledNavItem>

      {location.pathname.startsWith("/project-detail/") ? (
        <StyledNavItem isScrolled={isScrolled}>
          <Link to="/mes-realisations" onClick={closeMenu}>
            {t("homepage.Mes réalisations")}
          </Link>
        </StyledNavItem>
      ) : (
        <StyledNavItem isScrolled={isScrolled}>
          <a href="#mes-realisations" onClick={closeMenu}>
            {t("homepage.Mes réalisations")}
          </a>
        </StyledNavItem>
      )}
      {/* </StyledNavItem> */}
      <StyledNavItem isScrolled={isScrolled}>
        <Link to="/contact" onClick={closeMenu}>
          {t("homepage.Contactez-moi")}
        </Link>
      </StyledNavItem>
    </StyledNavList>
  );
}

NavLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isScrolled: PropTypes.bool.isRequired,
  onAboutClick: PropTypes.func.isRequired,
  closeMenu: PropTypes.func,
};

export default NavLinks;
