'use strict'; // The Javascript engine becomes pickier when deciding what we can and cant write

// For example we can't use a variable without declaring it.. a = 3; // error

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log('Hey, I am ' + this.firstname + ' ' + this.lastname);
    }
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();