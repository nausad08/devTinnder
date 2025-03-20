const express = require("express")

const app = express();

// app.use("/hello/2",(req,res)=>{
//     res.send("hello, hello , hello ... 2");
// })
// app.use("/hello",(req,res)=>{
//     res.send("hello, hello , hello ...");
// })
app.get("/user",(req,res)=>{
    res.send({firstName:"nausad",lastName:"mondal"})
})
app.post("/user",(req,res)=>{
    res.send("data sucessfully saved in the database");
})
app.delete("/user",(req,res)=>{
    res.send("deleted sucessfully...");
})


app.use("/test", (req,res)=>{
    res.send("hello from the server")
})
// app.use("/",(req,res)=>{
//     res.send("from dashboard..")
// })


app.listen(7777,()=>{
    console.log("Server is sucessfully listening on port 7777...")
})

