const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/db")
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))
