// var net = require('net');

// var portNumber = process.argv[2];

// function zeroPad(number) {
//     if (number < 10) {
//         return '0' + number;
//     }
//     return number;
// }

// var server = net.createServer(function (socket) {
//     var date = new Date();
    
//     var year   = date.getFullYear();
//     var month  = zeroPad(date.getMonth() + 1);
//     var day    = zeroPad(date.getDate());
//     var hour   = zeroPad(date.getHours());
//     var minute = zeroPad(date.getMinutes());
    
//     var dateString = year + '-' + month + '-' + day;
//     dateString = dateString + ' ' + hour + ':' + minute;
    
//     socket.end(dateString + '\n');
// });

// server.listen(portNumber); 

const net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))