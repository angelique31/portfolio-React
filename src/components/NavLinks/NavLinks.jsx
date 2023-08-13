import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledNavList, StyledNavItem } from "./NavLinks.styled";
import PropTypes from "prop-types";

function NavLinks({ isOpen, isScrolled, onAboutClick }) {
  const { t } = useTranslation();

  return (
    <StyledNavList $isOpen={isOpen}>
      <StyledNavItem isScrolled={isScrolled}>
        <Link onClick={onAboutClick}>{t("Qui je suis?")}</Link>
        {/* <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onAboutClick();
          }}
        >
          {t("Qui je suis?")}
        </a> */}
      </StyledNavItem>
      <StyledNavItem isScrolled={isScrolled}>
        <Link to="/cv">{t("Mon cv")}</Link>
      </StyledNavItem>
      <StyledNavItem isScrolled={isScrolled}>
        <a href="#mes-realisations">{t("Mes réalisations")}</a>
      </StyledNavItem>
      <StyledNavItem isScrolled={isScrolled}>
        <Link to="/contact">{t("Contactez-moi")}</Link>
      </StyledNavItem>
    </StyledNavList>
  );
}
NavLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isScrolled: PropTypes.bool.isRequired,
};

export default NavLinks;
