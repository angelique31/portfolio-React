import { useTranslation } from "react-i18next";
import {
  SpecialtiesContainer,
  Title,
  LogoContainer,
  LogoItem,
  ImageWrapper,
  LogoImage,
  LogoText,
} from "./Specialities.styled";

import JavascriptLogo from "../../assets/Icons/javascript.svg";
import ReactLogo from "../../assets/logos/logoReact.svg";
import SassLogo from "../../assets/logos/SassLogo.png";
import StyledCompLogo from "../../assets/logos/logo_styled_component.png";
import GitLogo from "../../assets/logos/GitLogo.png";
import ChatGPT4 from "../../assets/Icons/chatgpt.svg";
import UseVisibilityEffect from "../ScrollAwareComponents/UseVisibilityEffect";

const Specialties = () => {
  const { t } = useTranslation();
  const containerRef = UseVisibilityEffect();

  return (
    <SpecialtiesContainer ref={containerRef}>
      <Title>{t("homepage.Mes spécialités")}</Title>
      <LogoContainer>
        <LogoItem>
          <ImageWrapper>
            <LogoImage
              className="javascript-logo"
              src={JavascriptLogo}
              alt="javascript Logo"
            />
          </ImageWrapper>
          <LogoText>Javascript</LogoText>
        </LogoItem>

        <LogoItem>
          <ImageWrapper>
            <LogoImage
              className="react-logo"
              src={ReactLogo}
              alt="React Logo"
            />
          </ImageWrapper>
          <LogoText>React.js</LogoText>
        </LogoItem>

        <LogoItem>
          <ImageWrapper>
            <LogoImage className="sass-logo" src={SassLogo} alt="Sass Logo" />
          </ImageWrapper>
          <LogoText>Sass</LogoText>
        </LogoItem>

        <LogoItem>
          <ImageWrapper>
            <LogoImage
              className="styled-comp-logo"
              src={StyledCompLogo}
              alt="Styled Components Logo"
            />
          </ImageWrapper>
          <LogoText>Styled Components</LogoText>
        </LogoItem>

        <LogoItem>
          <ImageWrapper>
            <LogoImage className="git-logo" src={GitLogo} alt="Git Logo" />
          </ImageWrapper>
          <LogoText>GitHub</LogoText>
        </LogoItem>

        <LogoItem>
          <ImageWrapper>
            <LogoImage
              className="chatGPT-logo"
              src={ChatGPT4}
              alt="ChatGPT 4 Logo"
            />
          </ImageWrapper>
          <LogoText>ChatGPT 4</LogoText>
        </LogoItem>
      </LogoContainer>
    </SpecialtiesContainer>
  );
};

export default Specialties;
