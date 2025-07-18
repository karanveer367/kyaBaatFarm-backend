const Joi = require('joi');
const merivalidation = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(6),
  confirm:Joi.string(),
  nickname:Joi.string(),
  residence: Joi.array().items(Joi.string()),
  prefix: Joi.string().required(),
  phone:Joi.string().pattern(/^[0-9]{10}$/),
  gender: Joi.string().valid('male', 'female').required(),
  agreement: Joi.boolean().valid(true).required()
})
module.exports = merivalidation;