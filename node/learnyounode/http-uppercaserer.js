var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
console.log(req);
var body = [];
var bodyString;

req.on('data', function(data) {
    body.push(data);
});

req.on('end', function(){
    bodyString = body.join("").toUpperCase();
    
    res.write(bodyString);
    res.end();
});
});

server.listen(Number(port));