const mongoose = require("mongoose")

const ConnectDb = () => {
const db ='mongodb+srv://tanya:tanya@cluster0.hxpro3g.mongodb.net/college'

mongoose.connect(db,{
})
.then(()=>console.log("connected"))
.catch((err)=>console.log("error",err))
}

module.exports = ConnectDb;

