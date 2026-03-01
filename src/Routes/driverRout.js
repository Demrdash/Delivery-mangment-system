const express = require("express");
const driverdb = require("../data/driver.json");
// const fs = require("fs");
const router = express.Router();
const driverControl=require("../controllers/driverControler")
//!adding driver


 console.log(driverdb)
router.post("/", driverControl.addDriver)
//!getAllDriver
router.get("/",driverControl.getDriverAll)

//!getDriverByID
//!delete
//!update
router.route("/:driverID").get("/",driverControl.getDriverId)
.patch("/",driverControl.updataInfo)
.delete("/",driverControl.deleteDriverInfo)





module.exports=router;