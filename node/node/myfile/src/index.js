const path = require("path")
const express = require("express")
const app = express()
const port = 7999
console.log(path.join(__dirname,("../public1")))
const staticpath = path.join(__dirname,("../public1"))
app.use(express.static(staticpath))
app.get("/",(req,res)=>{
    res.send("hello for the express server")
})
 app.listen(port,()=>{
    console.log(`server is running on ${port}`)
 })












//  const path = require("path")
// const express = require("express")
// const app = express()
// const port = 8000
// console.log(path.join(__dirname,("../public1")))
// const staticpath = path.join(__dirname,("../public1"))
// app.use(express.static(staticpath))
// app.get("/",(req,res)=>{
//     res.send("hello for the express server")
// })
//  app.listen(port,()=>{
//     console.log(`server is running on ${port}`)
//  })



