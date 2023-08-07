import {
  SpecialtiesContainer,
  Title,
  LogoContainer,
  LogoItem,
  ImageWrapper,
  LogoImage,
  LogoText,
} from "./Specialities.styled";
import { useEffect, useRef } from "react";

import ReactLogo from "../../assets/logos/logoReact.svg";
import SassLogo from "../../assets/logos/SassLogo.png";
import StyledCompLogo from "../../assets/logos/logo_styled_component.png";
import GitLogo from "../../assets/logos/GitLogo.png";

const Specialties = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Assignez la valeur courante de la référence à une variable
    const refCourante = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Ajoutez la classe "visible" lorsque l'élément est dans la vue
          refCourante && refCourante.classList.add("visible");
        } else {
          // Supprimez la classe "visible" lorsque l'élément est hors de la vue
          refCourante && refCourante.classList.remove("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (refCourante) {
      observer.observe(refCourante);
    }

    return () => {
      if (refCourante) {
        observer.unobserve(refCourante);
      }
    };
  }, []);

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
