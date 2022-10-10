const path = require("path")
const express = require("express")
const app = express()
// console.log(path.join(__dirname,("../public")))
const staticpath = path.join(__dirname,("../public"))
app.use(express.static(staticpath))
app.get("/",(req,res)=>{
    res.send("express server ")
})
app.get("/about",(req,res)=>{
    res.send("express  about server ")
})

app.listen(7001,()=>{
    console.log("server is running")
})