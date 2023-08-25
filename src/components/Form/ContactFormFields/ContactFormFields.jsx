import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import {
  InputWrapper,
  FlexColumnDiv,
  ButtonAndDetailsWrapper,
  ErrorText,
} from "./ContactFormFields.styled";

import {
  ContactLeftStyled,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledButton,
} from "../ContactForm/ContactForm.styled";

import ValidateFormData from "../ValidateFormData/ValidateFormData";
import ContactDetails from "../ContactDetails/ContactDetails";

function ContactFormFields({
  formData,
  setFormData,
  formErrors,
  setFormErrors,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Validation dynamique
    const validationResults = ValidateFormData({
      ...formData,
      [name]: value, // Mise à jour du champ modifié avant la validation
    });
    setFormErrors(validationResults.errors);
  };
  const { t } = useTranslation();

  //avoir un état pour chaque champ qui indique si l'utilisateur a déjà interagi avec ce champ ou non
  const [touchedFields, setTouchedFields] = useState({
    fullname: false,
    email: false,
    message: false,
  });
  //Mettre à jour l'état lors de l'interaction avec un champ
  const handleInputBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <>
      <ContactLeftStyled className="contact-left">
        <InputWrapper>
          <FlexColumnDiv>
            <StyledLabel htmlFor="fname">
              {t("contactForm.fields.name.label")}
            </StyledLabel>
            <StyledInput
              type="text"
              id="fname"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              placeholder={t("contactForm.fields.name.placeholder")}
              onBlur={handleInputBlur}
            />
            {formErrors.fullname && touchedFields.fullname && (
              <ErrorText>
                {t(`contactForm.fields.name.error.${formErrors.fullname}`)}
              </ErrorText>
            )}
          </FlexColumnDiv>
          <FlexColumnDiv>
            <StyledLabel htmlFor="email">
              {t("contactForm.fields.email.label")}
            </StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("contactForm.fields.email.placeholder")}
              onBlur={handleInputBlur}
            />
            {formErrors.email && touchedFields.email && (
              <ErrorText>{t("contactForm.fields.email.error")}</ErrorText>
            )}
          </FlexColumnDiv>
        </InputWrapper>
        <FlexColumnDiv>
          <StyledLabel htmlFor="message">
            {t("contactForm.fields.message.label")}
          </StyledLabel>
          <StyledTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t("contactForm.fields.message.placeholder")}
            onBlur={handleInputBlur}
          ></StyledTextarea>
          {formErrors.message && touchedFields.message && (
            <ErrorText>{t("contactForm.fields.message.error")}</ErrorText>
          )}
        </FlexColumnDiv>
        <ButtonAndDetailsWrapper>
          <StyledButton
            type="submit"
            value={t("contactForm.fields.submit_button")}
          />
          <ContactDetails className="contact-details-component" />
        </ButtonAndDetailsWrapper>
      </ContactLeftStyled>
    </>
  );
}

ContactFormFields.propTypes = {
  formData: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};

export default ContactFormFields;
