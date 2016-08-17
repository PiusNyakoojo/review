/*
    Event
        - Something that has happened in our app that we can respond to.
        - In Node we actually talk about 2 different kinds of events.
            - System Events (C++ Core - libuv)
                - I've finished reading a file
                - The file is open
                - I've received a file from the internet
            - Custom Events (Javascript Core - Event Emitter) 
        
        When events happen in the System Events, they are often sent to the Event Emitter
        where our application decides what to do with those events.. So in a way, libuv is being
        wrapped around by javascript code that actually handles the events.

        Let's build our own Event Emitter to better understand how Nodejs does it.

    Magic String
        - A string that has some special meaning in our code. This is bad because it makes it easy for a
        typo to cause a bug, and hard for tools to help us find it.

        To deal with it, we can set the strings in a config file so we have them hardcoded in a single place
        in our application
*/

/*
    Object.create()
*/

var person = { // this is the prototype of john and jane
    firstname: '',
    lastname: '',
    greet: function() {
        return 'Hey, I am ' + this.firstname + ' ' + this.lastname;
    }
};

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet()); // Hey, I am John Doe
console.log(jane.greet()); // Hey, I am Jane Doe

/*
    A lot of internal javascript modules inherit from 'events' which is Nodejs's internal event emitter.

    Within util.js there is something that will help us with inheritance.
*/

/*
    Template Literal
        - A way to concatenate strings in Javascript (ES6)
        - Easier to work with than a bunch of strings concatenated with '+'

*/
var name = 'John Doe';

var greet = 'Hello ' + name;
var greet2 = `Hello ${name}`; // anything in ${} is valid javascript

/*
    .call(this, param1, param2, ...);
    .apply(this, [param1, param2, ...]);

*/

/*
    ES6 Classes
        - A new way to build objects (syntactic sugar)

    Syntactic sugar
        - A feature that only changes how you type something, but nothing changes under the hood.
*/

/*
    While Javascript is running Synchronously in the V8 engine, Nodejs can do other things while V8 does its
    thing. Thus NodeJS is asynchronous.

*/