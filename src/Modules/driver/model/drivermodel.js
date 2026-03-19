const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    vehicleType:{
        type:String,
        enum:["bike","car","truck"],
        required:true
    },

    licenseNumber:{
        type:String,
        required:true
    },

    isAvailable:{
        type:Boolean,
        default:true
    }

},{
    timestamps:true
})

module.exports = mongoose.model("Driver",driverSchema)