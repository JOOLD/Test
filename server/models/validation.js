const Joi = require("joi");

const registerValidation = data => {
  const userSchema = Joi.object({
    username: Joi.string().min(6).max(30).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
    repeat_password: Joi.ref("password"),
    isAdministrator: Joi.boolean().required()
  });

  return userSchema.validate(data);
};

const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required()
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;