const express = require("express")

// const { Databaseb } = require("mongodb")
const mongoose = require("mongoose")
const connectDb = require("./Databaseb");

const app = express()
// const db= 'mongodb+srv://tanya:tanya@cluster0.hxpro3g.mongodb.net/college?retryWrites=true&w=majority'

// Databaseb(db)
connectDb();
const studentSchema =new mongoose.Schema({
    name: String,
    course :String
})
const Student = new mongoose.model("Student",studentSchema)
const nodeStudent =new Student({
    name: "tanya",
    course : "BCA"
})


const reactStudent =new Student({
    name: "harshita",
    course : "BBA"
})
const htmlStudent =new Student({
    name: "nandini",
    course : "Bcom"
})
Student.insertMany([nodeStudent,reactStudent,htmlStudent])

const readDocument = async() => {
    const result = await Student.find({name:"tanya"})
    console.log(result)
}
readDocument()
 
app.get('/',(req,res)=>{
    res.send("server")
})

const port =process.env.port||'3000'
app.listen(port,()=>{
    console.log(`server is running port a ${port}`)
})