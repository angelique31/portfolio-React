import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  IntroContainer,
  IntroImage,
  IntroTitle,
  IntroHighlight,
  NameSpan,
  IntroSubtitle,
  IntroDescription,
  CloseIcon,
} from "./Introduction.styled";

const Introduction = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <IntroContainer>
      <CloseIcon onClick={onClose}>&#10005;</CloseIcon>
      <div>
        <IntroTitle>
          <IntroHighlight>{t("homepage.intro_greeting")}</IntroHighlight>{" "}
          <NameSpan>Angélique Rosin</NameSpan>
        </IntroTitle>

        <IntroSubtitle>{t("homepage.intro_role")}</IntroSubtitle>
        <IntroDescription>{t("homepage.intro_description")}</IntroDescription>
      </div>
      <IntroImage src="/assets/photo-cv-angel_1-removebg.png" alt="Your Name" />
    </IntroContainer>
  );
};

Introduction.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Introduction;
