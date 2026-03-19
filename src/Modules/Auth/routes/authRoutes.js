const express = require("express");
const router = express.Router();
const AuthController=require("../controller/authController");
const validate = require("../../../middlewares/validates");
const {registerSchema} = require("../Validator/authValidator");
const { loginSchema } = require("../Validator/authValidator");
const verifyToken = require("../../../middlewares/Authmiddlewares");


router.route("/register").post(validate(registerSchema),AuthController.Register);
router.route("/login").post(validate(loginSchema),AuthController.login);
router.route("/logout").post(AuthController.logout);
router.route("/Profile").get(verifyToken,AuthController.GETProfile);
module.exports=router;


