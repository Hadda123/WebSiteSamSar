const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateConnect(data) {
  let errors = {};


  data.login = !isEmpty(data.login) ? data.login : "";
  data.password = !isEmpty(data.password) ? data.password : "";


 
  if (validator.isEmpty(data.login)) {
    errors.login = "Obligatoire login";
  }
 
 

  if (validator.isEmpty(data.password)) {
    errors.password = "Obligatoire password";
  }
 

  return {
      errors,
      isValid: isEmpty(errors)
  }
};