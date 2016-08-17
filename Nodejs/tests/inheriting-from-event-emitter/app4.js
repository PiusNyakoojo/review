'use strict';

var util = require('util');
var Greetr = require('./greeter');

var greeter1 = new Greetr();
greeter1.on('greet', function(data) {
    console.log('suh dude');
});

greeter1.greet('Pius'); // Emit Event