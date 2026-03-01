
const driverdb = require("../data/driver.json");

//!get all driver

getDriverAll=(req,res)=>{
    // fs.readFile(driverdb  ,"utf-8",(err,   data)=>{
    //     if(err){
    //           return res.status(400).json({ err: "invalid request" });
    //     }
    //     res.send(data);
    // })
    res.send(driverdb)
};

//!add
addDriver=(req, res) => {

    if (!req.body) {
        return res.statusCode(400).json({ err: "invalid request" });
    }
    const draiverreq = { ...req.body };
    driverdb.push(draiverreq);
    res.status(200).json({ success: "success res" });

}
 //!getbyid
getDriverId=(req,res)=>{
    const driverId=+req.params.driverID;
    const driveres=driverdb.find((driver)=>driver.id===driverId);
    if(!driveres){
       res.status(400).json({err:"Invalid req"});
    }
    res.send(driveres);

}

//!update
updataInfo=(req,res)=>{
     const driverId=+req.params.driverID;
    const driveres=driverdb.find((driver)=>driver.id===driverId);
    if(!driveres){
       res.status(400).json({err:"Invalid req"});
    }

    const newInfoDriver={...driveres,...req.body}

    res.status(200).json(newInfoDriver);
}

//!delete
deleteDriverInfo= (req,res,next)=>{
     const driverId=+req.params.driverID;
    const driveres=driverdb.filter((driver)=>driver.id!==driverId);
    if(!driveres){
       res.status(400).json({err:"Invalid req"});
        next();
    }
    
    res.status(200).json(driveres);
   
}

module.exports={
    getDriverAll,
    addDriver,
    getDriverId,
    updataInfo,
    deleteDriverInfo


}