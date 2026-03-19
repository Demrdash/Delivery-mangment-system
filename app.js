const express = require("express");
// conn with mongoose to conn with db

const app = express();
const cors=require("cors")
const driverRoutes = require("./src/Modules/driver/Routes/driverRout")
const AuthRout = require("./src/Modules/Auth/routes/authRoutes")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/driver", driverRoutes);
app.use("/auth", AuthRout);


module.exports = app;