var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt');

readable.on('data', function(err, data) {
    
});