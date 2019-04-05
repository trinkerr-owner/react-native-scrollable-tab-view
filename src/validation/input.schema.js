// Input validation schemas 
const Joi = require('joi');

const healthSchema = Joi.object({
  status: Joi.string().valid('ok', 'degraded', 'down').required(),
});

const idSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

module.exports = { healthSchema, idSchema };