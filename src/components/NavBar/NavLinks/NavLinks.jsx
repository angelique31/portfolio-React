import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import PortfolioContext from "../../../context/portfolioContext";
import { StyledNavList, StyledNavItem } from "./NavLinks.styled";
import PropTypes from "prop-types";

function NavLinks({
  isOpen,
  isScrolled,
  onAboutClick,
  closeMenu,
  handleShowIntro,
}) {
  const location = useLocation();
  const { t } = useTranslation();
  const { openModal } = useContext(PortfolioContext);

  return (
    <StyledNavList $isOpen={isOpen}>
      <StyledNavItem className="intro-link" $isScrolled={isScrolled}>
        <Link
          to="/que-suis-je"
          onClick={() => {
            onAboutClick();
            closeMenu();
            handleShowIntro();
          }}
        >
          {t("homepage.Qui je suis?")}
        </Link>
      </StyledNavItem>

      <StyledNavItem $isScrolled={isScrolled}>
        <Link to="/cv" onClick={closeMenu}>
          {t("homepage.Mon cv")}
        </Link>
      </StyledNavItem>

      {location.pathname.startsWith("/project-detail/") ? (
        <StyledNavItem $isScrolled={isScrolled}>
          <Link to="/mes-realisations" onClick={closeMenu}>
            {t("homepage.Mes réalisations")}
          </Link>
        </StyledNavItem>
      ) : (
        <StyledNavItem $isScrolled={isScrolled}>
          <a href="#mes-realisations" onClick={closeMenu}>
            {t("homepage.Mes réalisations")}
          </a>
        </StyledNavItem>
      )}

      {/* <StyledNavItem $isScrolled={isScrolled}>
        <Link to="/contact" onClick={closeMenu}>
          {t("homepage.Contactez-moi")}
        </Link>
      </StyledNavItem> */}

      <StyledNavItem $isScrolled={isScrolled}>
        {/* Modification ici pour ouvrir la modale */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            openModal();
            closeMenu();
          }}
        >
          {t("homepage.Contactez-moi")}
        </a>
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
