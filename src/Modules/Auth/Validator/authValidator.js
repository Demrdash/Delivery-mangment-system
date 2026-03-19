const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().required(),
  vehicleType: Joi.string().valid("bike", "car", "truck").required(),
  licenseNumber: Joi.string().required()
});

const loginSchema= Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})
module.exports ={
 registerSchema , loginSchema
}
