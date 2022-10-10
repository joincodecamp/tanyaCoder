// Node.js file system

// const fs = require("fs")
// fs.writeFileSync("read.txt","welcome");


// Node.js http module

const http = require("http")
const server = http.createServer((req,res)=>{
    res.end("creating our own WEB SERVER in node.js")
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