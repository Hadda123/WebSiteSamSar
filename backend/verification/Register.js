const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateRegister(data) {
  let errors = {};


  data.login = !isEmpty(data.login) ? data.login : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.numTel = !isEmpty(data.numTel) ? data.numTel : "";
  data.sexe = !isEmpty(data.sexe) ? data.sexe : "";
  data.dateNaissance = !isEmpty(data.dateNaissance) ? data.dateNaissance : "";
  data.roleUser = !isEmpty(data.roleUser) ? data.roleUser : "";

 
  if (validator.isEmpty(data.login)) {
    errors.login = "Obligatoire login";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Obligatoire password";
  }
  if (validator.isEmpty(data.numTel)) {
    errors.numTel = "Obligatoire numTel";
  }
  if (validator.isEmpty(data.sexe)) {
    errors.sexe = "Obligatoire sexe";
  }
  if (validator.isEmpty(data.dateNaissance)) {
    errors.dateNaissance = "Obligatoire date naissance";
  }
  if (validator.isEmpty(data.roleUser)) {
    errors.roleUser = "Obligatoire roleUser";
  }


  return {
      errors,
      isValid: isEmpty(errors)
  }
};