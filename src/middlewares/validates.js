// const {body}=require("joi");
const joi=require("joi")
const { validationResult } = require("express-validator");
// const validateSchema=()=>{
//     return[
//         body("name").notEmpty()
//     ]
    
// }

module.exports=function(schema)
{
  return  (req,res,next)=>{
        const {error}=schema.validate(req.body);
        if(error){
            
            return res.status(400).json({error: error.details[0].message })
        }
        next();
}}



const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = validate;