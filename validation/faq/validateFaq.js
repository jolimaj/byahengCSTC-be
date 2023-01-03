const Joi = require("joi");
module.exports = {
  schema: Joi.object({
    answer: Joi.string().required(),
    question: Joi.string().required(),
  }),
  location: "body",
};
