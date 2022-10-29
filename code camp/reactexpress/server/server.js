const express = require('express')
const cors=require('cors')
const app = express()

app.use(cors())
app.get("/api",(req,res)=>{
    console.log("cjsvcjhv")
    res.json({
        name:"tanya",
        age:20
    })
})

app.listen(8000,()=>{
    console.log("connected")
})