const adminAuth = (req,res,next)=>{
    console.log("admin auth is getting checcked");
    const token = "xyz";
    const isAdminAuthorized = token==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized Access");
    }else{
        next();
    }

}
const userAuth = (req,res,next)=>{
    console.log("user auth is getting checcked");
    const token = "xyz";
    const isAdminAuthorized = token==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized Access");
    }else{
        next();
    }

}
module.exports={
    adminAuth,userAuth
}