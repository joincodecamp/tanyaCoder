const express = require("express");
const { isObjectIdOrHexString, default: mongoose } = require("mongoose");
// const mongoose = require("mongoose")
const ConnectDb = require("./ConnectDb");
const app = express()


ConnectDb();


const detailSchema =new mongoose.Schema({
  contactno :Number,
  contactadd : String,
//   user:{
//     type :schema, Types:iObjectId, ref:"user"
//   }
})

// const userSchema = new mongoose.Schema({
//     name:String,
//     emailid: String,
//     // detail:{
//     //     type :schema, Types:ObjectId, ref:"detail"
//     //   }

// }
// )

const Record = new mongoose.model("Record",detailSchema)

const contact = new Record({
    contactno :89889898988,
    contactadd: "#54,22-c,chd"

})
// const user = new Record({
//     name:"Tanya",
//     emailid: "tanya123@gmail.con",
// //    detail:contact._id,
   
// })
// detail.user=user._id;
contact.save()
// user.save()
app.get('/',(req,res)=>{
    res.send("server")
})

const port =process.env.port||'4000'
app.listen(port,()=>{
    console.log(`server is running port a ${port}`)
})