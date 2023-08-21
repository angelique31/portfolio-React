import { useState, useContext } from "react";
import PortfolioContext from "../../../context/portfolioContext";
import {
  ModalContainer,
  ModalContent,
  HeaderModal,
  CloseButton,
  StyledH2,
  StyledForm,
  ButtonDetailsWrapper,
  StyledButton,
} from "./ContactForm.styled";
import ContactDetails from "../ContactDetails/ContactDetails";
import ContactFormFields from "../ContactFormFields/ContactFormFields";
import ValidateFormData from "../ValidateFormData/ValidateFormData";

function ContactForm() {
  const { isModalOpen, closeModal } = useContext(PortfolioContext);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationResults = ValidateFormData(formData);
    setFormErrors(validationResults.errors);

    if (validationResults.isValid) {
      try {
        const response = await fetch("YOUR_FORMSPREE_API_URL", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
          setSuccessMessage("Merci ! Votre message a été envoyé.");
          setFormData({
            fullname: "",
            email: "",
            message: "",
          });
        } else {
          setError(
            "Il y a eu une erreur lors de l'envoi de votre message. Veuillez réessayer."
          );
        }
      } catch (error) {
        setError(
          "Il y a eu une erreur lors de l'envoi de votre message. Veuillez vérifier votre connexion et réessayer."
        );
      }
    }
  };

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
        <StyledForm id="contact" onSubmit={handleSubmit}>
          <ContactFormFields
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
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
