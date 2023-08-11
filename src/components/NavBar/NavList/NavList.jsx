import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  NavContainer,
  StyledNavList,
  StyledNavItem,
  LanguageDropdown,
  FlagContainer,
  DropdownContent,
} from "./NavList.styled";

import EnglishFlag from "../../../assets/logos/english_flag.png";
import FrenchFlag from "../../../assets/logos/french_flag.png";

function NavList({ isOpen }) {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <NavContainer>
      <StyledNavList $isOpen={isOpen}>
        {/* <NavLinksContainer> */}
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
        {/* </NavLinksContainer> */}
      </StyledNavList>
      <div>
        <StyledNavItem>
          <LanguageDropdown>
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <img
                src={i18n.language === "en" ? EnglishFlag : FrenchFlag}
                alt={i18n.language === "en" ? "flag English" : "flag Français"}
              />
            </button>
            {dropdownOpen && (
              <DropdownContent>
                <div
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setDropdownOpen(false);
                  }}
                >
                  <FlagContainer>
                    <img src={EnglishFlag} alt="English" />
                  </FlagContainer>
                  English
                </div>
                <div
                  onClick={() => {
                    i18n.changeLanguage("fr");
                    setDropdownOpen(false);
                  }}
                >
                  <FlagContainer>
                    <img src={FrenchFlag} alt="Français" />
                  </FlagContainer>
                  Français
                </div>
              </DropdownContent>
            )}
          </LanguageDropdown>
        </StyledNavItem>
      </div>
    </NavContainer>
  );
}

NavList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavList;
