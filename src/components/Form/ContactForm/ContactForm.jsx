import { useContext } from "react";
import PortfolioContext from "../../../context/portfolioContext";
import {
  ModalContainer,
  ModalContent,
  HeaderModal,
  CloseButton,
  StyledH2,
  StyledForm,
  FlexColumnDiv,
  ContactLeftStyled,
  ButtonDetailsWrapper,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledButton,
} from "./ContactForm.styled";
import ContactDetails from "../ContactDetails/ContactDetails";

function ContactForm() {
  const { isModalOpen, closeModal } = useContext(PortfolioContext);

  // Si la modale n'est pas ouverte, ne rien retourner
  if (!isModalOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        <HeaderModal className="header_modal">
          <CloseButton className="close" onClick={closeModal}>
            &times;
          </CloseButton>
          <StyledH2>{`Vous souhaitez discuter d'un projet, poser une question ou juste échanger un "Hello World"?`}</StyledH2>
        </HeaderModal>
        <StyledForm id="contact">
          <ContactLeftStyled className="contact-left">
            <FlexColumnDiv>
              <StyledLabel htmlFor="fname">Nom & Prénom</StyledLabel>
              <StyledInput
                type="text"
                id="fname"
                name="fullname"
                placeholder="Entrez votre nom et votre prénom"
              />
            </FlexColumnDiv>

            <FlexColumnDiv>
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledInput
                type="email"
                id="email"
                name="email"
                placeholder="Exemple : email@domaine.com"
              />
            </FlexColumnDiv>

            <FlexColumnDiv>
              <StyledLabel htmlFor="message">Votre message</StyledLabel>
              <StyledTextarea
                id="message"
                name="message"
                placeholder="Votre message ici"
                style={{ height: "200px" }}
              ></StyledTextarea>
            </FlexColumnDiv>
          </ContactLeftStyled>
          <ButtonDetailsWrapper>
            <StyledButton type="submit" value="Envoyer" />
            <ContactDetails className="contact-details-component" />
          </ButtonDetailsWrapper>
        </StyledForm>
      </ModalContent>
    </ModalContainer>
  );
}

export default ContactForm;
