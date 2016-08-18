var fs = require('fs');

var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var gzip = zlib.createGzip(); // creates a transform stream to compress our readable data

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

readable.pipe(gzip).pipe(compressed);