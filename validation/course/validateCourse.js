const Joi = require("joi");
module.exports = {
  schema: Joi.object({
    name: Joi.string().required(),
    courseCode: Joi.string().required(),
    slot: Joi.number().required(),
  }),
  location: "body",
};
