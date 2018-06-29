var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    console.log('request starting...');
    // respond
    response.writeHead(200, { 'Content-Type': 'image/jpg' });
    fs.createReadStream("./Wild_Turkey.jpg").pipe(response);
}).listen(3000, "127.0.0.1");