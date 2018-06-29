var fs = require("fs");
var zlib = require("zlib");
var gzip = zlib.createGzip();

var read = fs.createReadStream(__dirname + "/source.txt");
var zip = fs.createWriteStream(__dirname + "/destination.txt.gz");

read.pipe(gzip).pipe(zip);

