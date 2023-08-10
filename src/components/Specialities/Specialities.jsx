import { useEffect, useRef } from "react";
import {
  SpecialtiesContainer,
  Title,
  LogoContainer,
  LogoItem,
  ImageWrapper,
  LogoImage,
  LogoText,
} from "./Specialities.styled";

import ReactLogo from "../../assets/logos/logoReact.svg";
import SassLogo from "../../assets/logos/SassLogo.png";
import StyledCompLogo from "../../assets/logos/logo_styled_component.png";
import GitLogo from "../../assets/logos/GitLogo.png";
import UseIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver";

const Specialties = () => {
  const containerRef = useRef(null);
  const isVisible = UseIntersectionObserver(containerRef);

  useEffect(() => {
    if (isVisible) {
      containerRef.current.classList.add("visible");
    } else {
      containerRef.current.classList.remove("visible");
    }
  }, [isVisible]);

  return (
    <SpecialtiesContainer ref={containerRef}>
      <Title>Mes spécialités</Title>
      <LogoContainer>
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
      </LogoContainer>
    </SpecialtiesContainer>
  );
};

export default Specialties;
