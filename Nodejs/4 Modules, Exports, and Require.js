/*
    Modules
        - A resuable block of code whose existence does not accidentally impact other code. Javascript
        by itself doesn't have modules. In fact, this is a new feature in ES6.
    
    CommonJS Modules
        - An agreed upon standard for how code modules should be structured.

    First-Class Functions
        - Everything you can do with other types you can do with functions. You can use
        functions like strings, numbers, etc. (e.g. pass them around, set variables equal to them),
        put them in arrays, and more.

    Function Expression
        - A block of code that results in a value. Function expressions are possible in Javascript
        because functions are first-class.

    Revealing Module Pattern
        - Exposing only the properties and methods you want via an returned object. This is a very common
        and clean way to structure and protect code within modules.
*/

/*
    The code within another module is protected from being manipulated unless we explicitly make those
    features available to things outside of the module. To do this, we use module.exports

    You can actually remove .js from a module if it's a javascript module.

    __dirname, __filename, exports, module, require, this are all objects that are created for us at runtime.


    Prototypal inheritance
*/

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;    
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Doe');

/*
    So how do Node modules really work?

    When we write a node module, Node takes our code and wraps it inside of a function expression and passes exports, require,
    module, __filename, __dirname as paramteters
*/

(function (exports, require, module, __filename, __dirname) {
    var greet = function() {
        console.log('Hello!');
    };

    module.exports = greet;
});

/*
    then Node calls the function and returns module.exports;

    And because objects are passed by reference, whatever we do to module.exports inside our function will be
    reflected when in the module.exports that we return. 
*/

fn(module.exports, require, module, filename, dirname);

return module.exports;

/*
    require stores the results of a require call.. this is called caching. So when we require('') a certain file,
    it is cached. So if you require the same module a second time, you'll get the cached value rather than
    a new value. This is efficient :D.

    If we don't want to reference the same object from a module throughout the application, we can set
    module.exports = FunctionConstructor

    This gives us the ability to create new objects outside of the module.
*/

/*
    exports vs module.exports

    When our code is wrapped around a function expression, exports is passed as an argument. The thing thats
    passed in in the exports parameter is module.exports

*/

fn(module.exports, require, module, filename, dirname);

/*
    So really, exports is just a short-hand way of writing module.exports.. so why don't we use it all the time
    instead of module.exports. Well, recall that Node returns module.exports

    So if we set exports to some value, the reference is broken. exports no longer points to the same memory address
    as module.exports.

    So we can't follow some patterns that we would be able to when using module.exports. We can use exports if
    we mutate it..
    
    exports.someField = 'blah blah';

    but just use module.exports usually

*/

/*
    Requiring Native (core) modules: you can use require('some_module') without the ./

    ES6 now supports javascript modules.
*/

import * as greetr from 'greet'; // var greetr = require('greet');

/*
    Web Server Checklist
        - Better ways to organize our code into reusable pieces
            - module.exports / require('');
        - Ways to deal with files
        - Ways to deal with databases
        - The ability to communicate over the internet
        - The ability to accept requests and send responses (in the standard format)
        - A way to deal with work that takes a long time

*/