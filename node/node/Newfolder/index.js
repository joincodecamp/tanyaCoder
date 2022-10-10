// Node.js file system

// const fs = require("fs")
// fs.writeFileSync("read.txt","welcome");


// Node.js http module

const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === "/home"){
        res.end("home page")
    } 
     else if(req.url === "/contact"){
        res.end("contact page")
    } 
    else if(req.url === "/userapi"){
        fs.readFile("data.json","utf-8",(err,data)=>{
            console.log(data)
            res.end(data)

        })

    } 
    else {
    res.end("creating our own WEB SERVER in node.js")
    }
})

server.listen(7998,()=>{
    console.log("server is running")
})


// node.js url module

// const { default: nodeTest } = require("node:test");
// var url = require("url")
// var webaddress ="http://localhost:3000/index.html?name=tanya&age=20";
// var part = url.parse(webaddress,true)
// console.log(part)
// console.log(part.port)
// console.log(part.pathname)