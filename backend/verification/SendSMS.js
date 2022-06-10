const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateSendSMS(data) {
  let errors = {};


  data.numTel = !isEmpty(data.numTel) ? data.numTel : "";


 
  if (validator.isEmpty(data.numTel)) {
    errors.numTel = "Obligatoire phone number";
  }
 
 


  return {
      errors,
      isValid: isEmpty(errors)
  }
};