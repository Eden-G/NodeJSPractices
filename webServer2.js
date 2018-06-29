var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    console.log('request starting...');
    // respond
    response.writeHead(200, { 'Content-Type': 'image/jpg' });
    var image = fs.readFile("./Wild_Turkey.jpg", function(err, image){
        if(err) throw err;
        response.end(image);
    });
}).listen(3000, "127.0.0.1");