// const { body } = require("express-validator");

// exports.createShipmentValidator = [
//   body("sender")
//     .notEmpty().withMessage("Sender is required")
//     .isString().withMessage("Sender must be a string"),

//   body("receiver")
//     .notEmpty().withMessage("Receiver is required")
//     .isString().withMessage("Receiver must be a string"),

//   body("pickupAddress")
//     .notEmpty().withMessage("Pickup address is required")
//     .isString().withMessage("Pickup address must be a string"),

//   body("deliveryAddress")
//     .notEmpty().withMessage("Delivery address is required")
//     .isString().withMessage("Delivery address must be a string"),
// ];
const Joi = require("joi");

const shipmentSchema = Joi.object({
  sender: Joi.string().required(),
  receiver: Joi.string().required(),
  pickupAddress: Joi.string().required(),
  deliveryAddress: Joi.string().required(),
  status: Joi.string().valid("pending", "assigned", "in-transit", "delivered").optional()
});
module.exports=shipmentSchema;