let fs = require('fs');

var content = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(content);

var content2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log('data: ' + data);
    console.log('content2: ' + content2);
});

console.log('content2' + content2);