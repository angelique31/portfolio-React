import { useState, useContext, useEffect } from "react";
import PortfolioContext from "../../../context/portfolioContext";
import { useTranslation } from "react-i18next";

import {
  ModalBackdrop,
  ModalContainer,
  ModalContent,
  HeaderModal,
  CloseButton,
  StyledH3,
  StyledForm,
} from "./ContactForm.styled";

import ContactFormFields from "../ContactFormFields/ContactFormFields";
import ValidateFormData from "../ValidateFormData/ValidateFormData";
import ConfirmationModal from "../ConfirmationModale/ConfirmationModale";

function ContactForm() {
  const { isModalOpen, closeModal } = useContext(PortfolioContext);
  const { t } = useTranslation();
  const [isFormVisible, setIsFormVisible] = useState(true);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationResults = ValidateFormData(formData);
    setFormErrors(validationResults.errors);

    if (validationResults.isValid) {
      try {
        const response = await fetch("https://formspree.io/f/xvojagbp", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
          setSuccessMessage("Merci ! Votre message a été envoyé.");
          setIsConfirmationModalOpen(true);
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

  //La modale se ferme quand on clique sur un lien de la navBar
  useEffect(() => {
    const closeFormOnNavLinkClick = () => {
      closeModal();
    };

    const navLinks = document.querySelectorAll("a"); // Sélectionne tous les liens de navigation
    navLinks.forEach((link) => {
      link.addEventListener("click", closeFormOnNavLinkClick);
    });

    // Retirez les écouteurs d'événements lors du nettoyage
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", closeFormOnNavLinkClick);
      });
    };
  }, [closeModal]);

  //La modale apparait
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
      {isModalOpen && <ModalBackdrop />}

      <ModalContainer
        style={{ display: isModalOpen && isFormVisible ? "block" : "none" }}
      >
        <ModalContent>
          <HeaderModal className="header_modal">
            <CloseButton className="close" onClick={closeModal}>
              &times;
            </CloseButton>
            <StyledH3>{t("contactForm.header.title")}</StyledH3>
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

      <ConfirmationModal
        isOpen={!!successMessage}
        onClose={() => setSuccessMessage("")}
        setIsFormVisible={setIsFormVisible}
        isFormVisible={isFormVisible}
        closeModal={closeModal}
      />
    </>
  );
}

export default ContactForm;
