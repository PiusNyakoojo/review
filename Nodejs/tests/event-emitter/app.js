var Emitter = require('./emitter');
var eventConfig = require('./config').events;
// var Emitter2 = require('events'); // node's internal event emitter

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.FILESAVED, function() {
    console.log('File is saved duddeeee');
});

emtr.emit('greet');