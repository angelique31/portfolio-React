import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledNavList, StyledNavItem } from "./NavLinks.styled";
import PropTypes from "prop-types";

function NavLinks({ isOpen }) {
  const { t } = useTranslation();

  return (
    <StyledNavList $isOpen={isOpen}>
      <StyledNavItem>
        <Link to="/about">{t("Qui je suis?")}</Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link to="/cv">{t("Mon cv")}</Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link to="/realisations">{t("Mes réalisations")}</Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link to="/contact">{t("Contactez-moi")}</Link>
      </StyledNavItem>
    </StyledNavList>
  );
}
NavLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavLinks;
