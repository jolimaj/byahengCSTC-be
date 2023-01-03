const validateCourse = require("./course/validateCourse");
const validateFaq = require("./faq/validateFaq");
const validateRegistration = require("./accounts/validateRegistration");
const validateLogin = require("./accounts/validateLogin");
const validatePassword = require("./accounts/validatePassword");
const validateEmail = require("./accounts/validateEmail");

function schemaValidate(template, req, res, next) {
  try {
    const validate = template.schema.validate(req[template.location]);
    if (validate.error) {
      return res.status(400).json({
        error: validate.error.details.map((e) => e.message.replace(/"/gim, "")),
      });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: e.toString(),
    });
  }
}

const validate = {
  validateCourse: (req, res, next) =>
    schemaValidate(validateCourse, req, res, next),
  validateFaq: (req, res, next) => schemaValidate(validateFaq, req, res, next),
  validateRegistration: (req, res, next) =>
    schemaValidate(validateRegistration, req, res, next),
  validateLogin: (req, res, next) =>
    schemaValidate(validateLogin, req, res, next),
  validatePassword: (req, res, next) =>
    schemaValidate(validatePassword, req, res, next),
  validateEmail: (req, res, next) =>
    schemaValidate(validateEmail, req, res, next),
};

module.exports = validate;
