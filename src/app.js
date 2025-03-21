const express = require("express")

const app = express();


app.get("/user",(req,res)=>{
    console.log(req.query);//{ userid: '101', password: 'testing' }
    res.send({firstName:"nausad",lastName:"mondal"})
})
app.get("/userr/:userid/:name/:password",(req,res)=>{
    console.log(req.params); //{ userid: '768', name: 'nausad', password: 'testing' }
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

