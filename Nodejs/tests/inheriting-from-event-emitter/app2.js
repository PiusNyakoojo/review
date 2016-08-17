var EventEmitter = require('events');
var util = require('util');

var Person = function() {
    this.firstname = 'John',
    this.lastname = 'Doe'
};

Person.prototype.greet = function() {
    console.log(`Hey, I am ${this.firstname + ' ' + this.lastname}`);
}

var Policeman = function() {
    Person.call(this); // We are telling Person to apply the firstname and lastname properties to the object that's being created from Policeman
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();

officer.greet();