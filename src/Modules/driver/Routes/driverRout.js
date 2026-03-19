const express = require("express");
const driverdb = require("../../../data/driver.json");
// const fs = require("fs");
const router = express.Router();
const driverControl = require("../controllers/driverControler")
const validate = require("../../../../src/middlewares/validates");
const { driverSchema } = require("../Validator/driverValidator");
const verifyToken = require("../../../middlewares/Authmiddlewares");
const allowedto = require("../../../middlewares/allowedto");
const userRole = require("../../../utils/UserRole");

//!adding driver


// console.log(driverdb)
router.post("/", verifyToken, allowedto(userRole.Admin) ,validate(driverSchema), driverControl.addDriver)
//!getAllDriver
router.get("/",  verifyToken,allowedto(userRole.Admin), driverControl.getDriverAll)

//!getDriverByID
//!delete
//!update
router.route("/:driverID")
.get(driverControl.getDriverId)
    .patch(verifyToken,allowedto(userRole.Admin),driverControl.updataInfo)
    .delete(verifyToken,allowedto(userRole.Admin),driverControl.deleteDriverInfo)





module.exports = router;