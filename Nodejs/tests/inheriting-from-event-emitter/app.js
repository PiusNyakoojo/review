var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    // This line of code makes sure that everything an object created by EventEmitter will also be accessible for Greetr objects
    EventEmitter.call(this); // Set the object the event emitter is attached to to the new object; this is also known as the super constructor
    
    
    this.greeting = 'Hello World!'; // add a property to the new object that's created
}

util.inherits(Greetr, EventEmitter); // This line gives us access to all the properties of EventEmitter

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted! ' + data);
});

greeter1.greet('Pius');