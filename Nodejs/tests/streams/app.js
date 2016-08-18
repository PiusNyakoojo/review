var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8',
    highWaterMark: 1 * 1024 // 32 kilobytes since 1024 bytes == 1 kilobyte in IEC standard
}); // Readable Stream

readable.on('data', function(data) {
    console.log( data );
});