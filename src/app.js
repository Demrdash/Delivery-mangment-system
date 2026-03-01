const express=require("express");

const app=express();
const driverRoutes = require("./Routes/driverRout")
app.use(express.json());
app.use(express.urlencoded());

app.use("/driver",driverRoutes);

module.exports=app;