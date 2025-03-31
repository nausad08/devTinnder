const express = require("express")

const app = express();
const {adminAuth,userAuth} = require("./middlewares/auth")

app.use("/admin",adminAuth)

//*---------------- Error Handeller ---------------------------

app.get("/getUserData",(req,res)=>{
    throw new Error("jhbdcfh");
    res.send("user data send");
    // try{
    //     // logic to db call and get user data
    //     throw new Error("jhbdcfh");
    //     res.send("user data send");

    // }catch(err){
    //     res.status(500).send("some error contact support");

    // }
})

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("somethings went wrong");
    }
})


app.listen(7777,()=>{
    console.log("Server is sucessfully listening on port 7777...")
})

