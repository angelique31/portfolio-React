import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  ConfirmationModalContainer,
  ConfirmationModalContent,
  ConfirmationModalCloseButton,
  ConfirmationModalH2,
  StyledParagraph,
  StyledButton,
} from "./ConfirmationModale.styled";

function ConfirmationModal({ isOpen, onClose }) {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleClose = () => {
    onClose();

    // navigate(-1);
    navigate("/");
  };

  if (!isOpen) return null;
  return (
    <ConfirmationModalContainer>
      <ConfirmationModalContent>
        <ConfirmationModalCloseButton className="close" onClick={handleClose}>
          &times;
        </ConfirmationModalCloseButton>
        <ConfirmationModalH2>
          {t("confirmationModal.title")}
        </ConfirmationModalH2>
        <StyledParagraph> {t("confirmationModal.message")}</StyledParagraph>
        <StyledButton onClick={handleClose}>
          {t("confirmationModal.ok_button")}
        </StyledButton>
      </ConfirmationModalContent>
    </ConfirmationModalContainer>
  );
}
export default ConfirmationModal;
