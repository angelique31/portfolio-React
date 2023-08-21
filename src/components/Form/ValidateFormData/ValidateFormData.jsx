const ValidateFormData = (formData) => {
  let errors = {};

  const validateCustomField = (
    value,
    minLength,
    regex,
    lengthErrorMsg,
    regexErrorMsg
  ) => {
    console.log("Value:", value);
    if (value.trim().length < minLength) {
      return lengthErrorMsg;
    }
    if (!regex.test(value)) {
      console.log("Regex failed for value:", value);
      return regexErrorMsg;
    }
    return "";
  };

  const fullnameError = validateCustomField(
    formData.fullname,
    2,
    /^[a-zA-ZÀ-ÿ\s-]+$/i,
    "Le nom & prénom doivent avoir au moins 2 caractères.",
    "Seuls les lettres, espaces et tirets sont autorisés."
  );
  if (fullnameError) {
    errors["fullname"] = fullnameError;
  }

  if (!formData.email) {
    errors["email"] = "Veuillez saisir un email valide";
  } else if (
    typeof formData.email !== "undefined" &&
    !formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
  ) {
    errors["email"] = "Veuillez saisir un email valide";
  }

  if (formData.message.trim().length < 5) {
    errors["message"] = "Le message doit avoir au moins 5 caractères.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors,
  };
};

export default ValidateFormData;
