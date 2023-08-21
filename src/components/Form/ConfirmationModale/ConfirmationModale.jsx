import {
  ConfirmationModalContainer,
  ConfirmationModalContent,
  ConfirmationModalCloseButton,
  ConfirmationModalH2,
  StyledParagraph,
  StyledButton,
} from "./ConfirmationModale.styled";

function ConfirmationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ConfirmationModalContainer>
      <ConfirmationModalContent>
        <ConfirmationModalCloseButton className="close" onClick={onClose}>
          &times;
        </ConfirmationModalCloseButton>
        <ConfirmationModalH2>Merci !</ConfirmationModalH2>
        <StyledParagraph>
          Votre message a été envoyé avec succès 🚀.
        </StyledParagraph>
        <StyledButton onClick={onClose}>OK</StyledButton>
      </ConfirmationModalContent>
    </ConfirmationModalContainer>
  );
}
export default ConfirmationModal;
