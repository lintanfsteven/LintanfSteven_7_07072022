exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";

  if (err.message.includes("email"))
    errors.email = "L'email indiqué est incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit contenir 6 caractères au minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Cet pseudo est déjà pris";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email"))
    errors.email = "L'email indiqué est inconnu";

  if (err.message.includes("password"))
    errors.password = "Mot de passe incorrect";

  return errors;
};

exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("Invalid file"))
    errors.format = "Format incompatible";

  if (err.message.includes("Max size"))
    errors.maxSize = "Le fichier dépasse 500ko";

  return errors;
};
