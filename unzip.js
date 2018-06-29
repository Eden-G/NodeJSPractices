var fs = require("fs");
var zlib = require("zlib");
var gunzip = zlib.createGunzip();

var read = fs.createReadStream(__dirname + "/destination.txt.gz");
var unzip = fs.createWriteStream(__dirname + "/destination.txt");

read.pipe(gunzip).pipe(unzip);