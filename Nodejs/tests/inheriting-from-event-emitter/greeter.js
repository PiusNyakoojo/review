'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
    constructor() {
        super(); // call the parent class
        this.greeting = 'Hello World!';
    }

    greet(data) {
        console.log(this.greeting + ': ' + data);
        this.emit('greet', data);
    }
}