import { useState, useContext, useEffect } from "react";
import PortfolioContext from "../../../context/portfolioContext";
import {
  ModalBackdrop,
  ModalContainer,
  ModalContent,
  HeaderModal,
  CloseButton,
  StyledH2,
  StyledForm,
} from "./ContactForm.styled";

import ContactFormFields from "../ContactFormFields/ContactFormFields";
import ValidateFormData from "../ValidateFormData/ValidateFormData";
import ConfirmationModal from "../ConfirmationModale/ConfirmationModale";

function ContactForm() {
  const { isModalOpen, closeModal } = useContext(PortfolioContext);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  // const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  // const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const validationResults = ValidateFormData(formData);
  //   setFormErrors(validationResults.errors);

  //   if (validationResults.isValid) {
  //     try {
  //       const response = await fetch("YOUR_FORMSPREE_API_URL", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         body: new URLSearchParams(formData).toString(),
  //       });

  //       if (response.ok) {
  //         setSuccessMessage("Merci ! Votre message a été envoyé.");
  //         setIsConfirmationModalOpen(true);
  //         setFormData({
  //           fullname: "",
  //           email: "",
  //           message: "",
  //         });
  //       } else {
  //         setError(
  //           "Il y a eu une erreur lors de l'envoi de votre message. Veuillez réessayer."
  //         );
  //       }
  //     } catch (error) {
  //       setError(
  //         "Il y a eu une erreur lors de l'envoi de votre message. Veuillez vérifier votre connexion et réessayer."
  //       );
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Fonction handleSubmit appelée!");

    const validationResults = ValidateFormData(formData);
    setFormErrors(validationResults.errors);

    if (validationResults.isValid) {
      // Simuler une attente de requête réseau
      setTimeout(() => {
        setSuccessMessage("Merci ! Votre message a été envoyé.");
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
      }, 1000); // Attente d'une seconde
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  // Si la modale n'est pas ouverte, ne rien retourner
  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      <ModalBackdrop />
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
          </StyledForm>
        </ModalContent>
      </ModalContainer>
      {/* <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
      /> */}
      <ConfirmationModal
        isOpen={!!successMessage}
        onClose={() => setSuccessMessage("")}
      />
    </>
  );
}

export default ContactForm;
