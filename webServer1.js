var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    console.log('request starting...');
    // respond
    response.writeHead(200, { 'Content-Type': 'image/gif' });
    var image = fs.readFileSync(__dirname + "/Wild_Turkey.jpg")
    response.end(image);
}).listen(3000, "127.0.0.1");