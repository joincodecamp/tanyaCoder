                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const mongoose = require("mongoose")

const connectDb = () => {
const db ='mongodb+srv://tanya:tanya@cluster0.hxpro3g.mongodb.net/college'
// const db ='mongodb://localhost:27018/?directConnection=true'
mongoose.connect(db,{
})
.then(()=>console.log("connected"))
.catch((err)=>console.log("error",err))
}

module.exports = connectDb;






// const express = require("express")
// const { Databaseb } = require("mongodb")
// const mongoose = require("mongoose")

// const app = express()
//  const db= 'mongodb+srv://tanya:tanya@cluster0.hxpro3g.mongodb.net/college?retryWrites=true&w=majority'


//     Databaseb(db)


//     app.get('/',(req,res)=>{
//     res.send("server")
// })

// const port =process.env.port||'3000'
// app.listen(port,()=>{
//     console.log(`server is running port a ${port}`)
// })
