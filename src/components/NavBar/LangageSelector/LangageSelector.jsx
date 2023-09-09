import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  LanguageDropdown,
  FlagContainer,
  DropdownContent,
} from "./LangageSelector.styled";

import EnglishFlag from "../../../assets/logos/english_flag.png";
import FrenchFlag from "../../../assets/logos/french_flag.png";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
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
  );
}

export default LanguageSelector;
