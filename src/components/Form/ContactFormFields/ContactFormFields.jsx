import PropTypes from "prop-types";

import { FlexColumnDiv, ErrorText } from "./ContactFormFields.styled";

import {
  ContactLeftStyled,
  StyledLabel,
  StyledInput,
  StyledTextarea,
} from "../ContactForm/ContactForm.styled";

import ValidateFormData from "../ValidateFormData/ValidateFormData";

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

  return (
    <ContactLeftStyled className="contact-left">
      <FlexColumnDiv>
        <StyledLabel htmlFor="fname">Nom & Prénom</StyledLabel>
        <StyledInput
          type="text"
          id="fname"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          placeholder="Entrez votre nom et votre prénom"
        />
        {formErrors.fullname && <ErrorText>{formErrors.fullname}</ErrorText>}
      </FlexColumnDiv>

      <FlexColumnDiv>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Exemple : email@domaine.com"
        />
        {formErrors.email && <ErrorText>{formErrors.email}</ErrorText>}
      </FlexColumnDiv>

      <FlexColumnDiv>
        <StyledLabel htmlFor="message">Votre message</StyledLabel>
        <StyledTextarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Votre message ici"
          style={{ height: "200px" }}
        ></StyledTextarea>
        {formErrors.message && <ErrorText>{formErrors.message}</ErrorText>}
      </FlexColumnDiv>
    </ContactLeftStyled>
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
