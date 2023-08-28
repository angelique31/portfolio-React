import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import PortfolioContext from "../../../context/portfolioContext";
import {
  StyledNavList,
  StyledNavItem,
  StyledDownloadButton,
  StyledIcon,
  StyledLinkContainer,
  TextWrapper,
} from "./NavLinks.styled";
import PropTypes from "prop-types";
import DownloadIcon from "../../../assets/Icons/download.svg";

function NavLinks({
  isOpen,
  isScrolled,
  onAboutClick,
  closeMenu,
  handleShowIntro,
}) {
  const location = useLocation();
  const { t } = useTranslation();
  const { openModal, setIsFormVisible } = useContext(PortfolioContext);

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
          <TextWrapper>{t("homepage.Qui je suis?")}</TextWrapper>
        </Link>
      </StyledNavItem>

      <StyledNavItem $isScrolled={isScrolled}>
        <StyledLinkContainer>
          <Link to="/cv" onClick={closeMenu}>
            <TextWrapper>{t("homepage.Mon cv")}</TextWrapper>
          </Link>
          <StyledDownloadButton href="/CV_Angelique_Rosin.pdf" download>
            <StyledIcon
              src={DownloadIcon}
              alt="Icône de telechargement de CV"
            />
          </StyledDownloadButton>
        </StyledLinkContainer>
      </StyledNavItem>

      <StyledNavItem $isScrolled={isScrolled}>
        {location.pathname === "/" ? (
          <a href="#mes-realisations" onClick={closeMenu}>
            <TextWrapper>{t("homepage.Mes réalisations")}</TextWrapper>
          </a>
        ) : (
          <Link to="/#mes-realisations" onClick={closeMenu}>
            <TextWrapper>{t("homepage.Mes réalisations")}</TextWrapper>
          </Link>
        )}
      </StyledNavItem>

      <StyledNavItem $isScrolled={isScrolled}>
        {location.pathname === "/" ? (
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              openModal();
              closeMenu();
            }}
          >
            <TextWrapper>{t("homepage.Contactez-moi")}</TextWrapper>
          </a>
        ) : (
          <Link
            to="/#contact"
            onClick={(e) => {
              openModal();
              closeMenu();
            }}
          >
            <TextWrapper>{t("homepage.Contactez-moi")}</TextWrapper>
          </Link>
        )}
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
