var http = require('http')
var bl = require('bl')
var req = http.request(options, callback).end();

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        data = data.toString()
        console.log(data)
    }))
})