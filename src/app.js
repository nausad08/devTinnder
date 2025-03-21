const express = require("express")

const app = express();


// multiple route handeller
// *app.use(route,[rH,RH,rH....])

app.use("/user",
    (req,res,next)=>{
    console.log("handelling the route user...")
    // res.send("Response 1 ..")
    next();
},
(req,res,next)=>{
    console.log("handelling the rouute user 2!! ..")
    // res.send("Response 2 ..")
    next();
},
(req,res,next)=>{
    console.log("handelling the rouute user 3!! ..")
    // res.send("Response 3 ..")
    next();
},      
(req,res,next)=>{
    console.log("handelling the rouute user 4!! ..")
    res.send("Response 4 ..")
    next();
}
)




app.listen(7777,()=>{
    console.log("Server is sucessfully listening on port 7777...")
})

