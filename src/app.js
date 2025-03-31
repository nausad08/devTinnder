const express = require("express")

const app = express();
const {adminAuth,userAuth} = require("./middlewares/auth")

app.use("/admin",adminAuth)

app.use("/user/login",(req,res)=>{
    res.send("user loggin sucesssfullyy..."); // when we call /user, /admin call hobe na 
})

app.use("/user/data",userAuth,(req,res)=>{
    res.send("user data send"); // when we call /user, /admin call hobe na 
})
app.get("/admin/getAllData",(req,res)=>{
    res.send("All data sent");
})
app.get("/admin/deleteUser",(req,res)=>{
    res.send("Delete user")
})


app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("somethings went wrong");
    }
})


app.listen(7777,()=>{
    console.log("Server is sucessfully listening on port 7777...")
})

