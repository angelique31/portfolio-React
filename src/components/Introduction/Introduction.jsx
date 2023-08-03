import {
  IntroContainer,
  IntroImage,
  IntroTitle,
  CloseIcon,
} from "./Introduction.styled";

const Introduction = ({ onClose }) => (
  <IntroContainer>
    <CloseIcon onClick={onClose}>&#10005;</CloseIcon>
    <IntroImage src="/assets/photoId.jpg" alt="Your Name" />
    <IntroTitle>Your Name</IntroTitle>
  </IntroContainer>
);

export default Introduction;
