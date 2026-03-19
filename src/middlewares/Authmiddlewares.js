
const jwt=require("jsonwebtoken");
const httpStat = require("../utils/httpStatustext");
const AppError = require("../utils/AppError");
const verifyToken=(req,res,next)=>{
const authHeader = req.headers.authorization;

    if(!authHeader){
        
        const error = AppError.create("token is required",401,httpStat.error);
        return next(error);
    }
    const token = authHeader.split(' ')[1];
    console.log(token);
    try{
         const decode= jwt.verify(token,process.env.JWT_SECRET);
          req.currentUser=decode;
    console.log(decode);
    next();
    }catch(err){
         const error = AppError.create("token is invalid",401,httpStat.error);
        return next(error);
    }
   

}

module.exports= verifyToken