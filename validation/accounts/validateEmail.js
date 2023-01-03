const Joi = require("joi");
module.exports = {
  schema: Joi.object({
    email: Joi.string().email().trim(true).required(),
  }),
  location: "body",
};
