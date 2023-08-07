import PropTypes from "prop-types";
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

const Introduction = ({ onClose }) => (
  <IntroContainer>
    <CloseIcon onClick={onClose}>&#10005;</CloseIcon>
    <div>
      <IntroTitle>
        <IntroHighlight>Bonjour, je suis</IntroHighlight>{" "}
        <NameSpan>Angélique Rosin</NameSpan>
      </IntroTitle>

      <IntroSubtitle>Développeuse Javascript React</IntroSubtitle>
      <IntroDescription>{`"Passionnée par la création d'expériences utilisateur intuitives, je transforme les idées en réalités concrètes à travers la programmation."`}</IntroDescription>
    </div>
    <IntroImage src="/assets/photo-cv-angel_1-removebg.png" alt="Your Name" />
  </IntroContainer>
);

Introduction.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Introduction;
