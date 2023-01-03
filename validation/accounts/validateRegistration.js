const Joi = require("joi");
module.exports = {
  schema: Joi.object({
    roleID: Joi.number().required(),
    first_name: Joi.string().required(),
    middle_name: Joi.string().optional(),
    last_name: Joi.string().required(),
    address: Joi.string().max(100).required(),
    mobile: Joi.string()
      .pattern(/[6-9]{1}[0-9]{9}/)
      .required(),
    email: Joi.string().email().trim(true).required(),
  }),
  location: "body",
};
