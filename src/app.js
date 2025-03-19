const express = require("express")

const app = express();
app.use("/",(req,res)=>{
    res.send("from dashboard..")
})

app.use("/hello",(req,res)=>{
    res.send("hello, hello , hello ...");
})
app.use("/test", (req,res)=>{
    res.send("hello from the server")
})

app.listen(7777,()=>{
    console.log("Server is sucessfully listening on port 7777...")
})
