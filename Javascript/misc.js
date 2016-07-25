/*
1. BIND

The bind() method creates a new function that, when called, has its "this" keyword set to the provided value, with a given sequence of
arguments preceding any provided when the new function is called.

SYNTAX:

fun.bind(thisArg[, arg1[, arg2[, ...]]])

The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular "this" value. A common
mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the
original object as its "this" (e.g. by using that method in callback-based code). Without special care, however, the original object is
usually lost. Creating a bound function from the fuction, using the original object, neatly solves this problem
*/

/* EXAMPLE 1a */

this.x = 9;
var module = {
	x: 81,
	getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX(); // returns 9. The function gets invoked at the global scope

/*
Create a new function with "this" bound to module. New programmers might confuse the global var x with module's property x
*/

var boundGetX = retrieveX.bind(module);

boundGetX(); // 81


/* EXAMPLE 1b */

function list() {
	return Array.prototype.slice.call(arguments);
}

var list1 = list(1,2,3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtySevenList = list.bind(undefined, 37);

var list2 = leadingThirtySevenList();
// [37]

var list3 = leadingThirtySevenList(1, 2, 3);
// [37, 1, 2, 3]


/*
2. PROTOTYPE

All JavaScript objects inherit the properties and methods from their prototype Objects created using an object literal, or with new Object(), inherit from a prototype
called Object.prototype. Objects created with new Date() inherit the Date.prototype. The Object.prototype is on the top of the prototype chain.

USECASE: Sometimes you want to add new properties (or methods) to an existing object. Or add new properties or methods to all existing objects of a given type. Or
add new properties or methods to an object prototype
*/

function Person(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
}

var bob = new Person("Bob", "Smith", 17);
var annie = new Person("Annie", "Walker", 22);

bob.eyeColor = "blue"; // Adds the eyecolor property to bob

console.log( bob.eyeColor ); // blue
console.log( annie.eyeColor ); // undefined

// To add a new property to the type Person, add a property directly to the object's prototype

Person.prototype.eyeColor = "brown";

console.log( bob.eyeColor ); // blue
console.log( annie.eyeColor ); // brown


/*
3. ASYNC VS. DEFER


*/

/*
4. ITERATORS VS. GENERATORS

*/


/*
5. YIELD KEYWORD

The yield keyword is used to pause and resume a generator function (function* or legacy generator function).

SYNTAX:

[rv] = yield [expression];

expression defines the value to return from the generator function via the iterator protocol. If omitted, undefined is returned instead.
The following code is the declaration of an example generator function.
*/

function* foo() {
	var index = 0;
	while( index <= 2 )
		yield index++;
}

/*
Once a generator is defined, it can be used by constructing an iterator as shown.
*/

var iterator = foo();
console.log( iterator.next() ); // { value: 0, done: false }
console.log( iterator.next() ); // { value: 1, done: false }
console.log( iterator.next() ); // { value: 2, done: false }
console.log( iterator.next() ); // { value: undefined, done: true }


/*
6. CALL VS. APPLY

First of all, both methods expect a thisArg as the first argument. This is the argument that gives the function a context; it determines the value
of the Javascript keyword this inside the function that is called or applied. The single difference is that the call method requires that arguments are specified
separately; the apply method takes them as an array. It's clearer if you see the syntax:

SYNTAX ( CALL ):

function.call( thisArg [, argument1[, argument2[, ...]]]);

SYNTAX ( APPLY ):

function.apply( thisArg [, argumentArray]);

*/

var fullname = "John Doe", age = 12;

var obj = {
	fullname: "Colin Ihrig",
	age: 17,
	prop: {
		fullname: "Aurelio De Rosa",
		age: 22,
		getInfo: function() {
			return this.fullname + ", " + this.age;
		}
	}
};

var test = obj.prop.getInfo;

// John Doe, 12
console.log( test() );
console.log( test.call( this ) );
console.log( test.apply( this ) );

// Aurelio De Rosa, 22
console.log( test.call( obj ) );
console.log( test.apply( obj ) );

// Aurelio De Rosa, 22
console.log( test.call( obj.prop ) );
console.log( test.apply( obj.prop ) );



/*
7. INHERITANCE

*/

function Person(name) {
	this.name = name;
}

// ES5

function Employee(name, id) {
	Person.call(name);
	this.id = id;
}

Employee.prototype = Object.create(Person.prototype);
Object.defineProperty(Employee.prototype, "constructor",
	{value: Employee.enumerable: false, configurable: true });
Employee.__proto__ = Person;
Employee.withId = function (id) {...}
Employee.prototype.hire = function() {...};
Employee.prototype.fire = function() {...};

// ES6

class Employee extends Person {
	constructor(name, id) {
		super(name);
		this.id = id;
	}

	hire () {...}
	fire () {...}
	static withId (id) {...}
}


/*
8. CLOSURES

*/

/*
9. HOISTING

In JavaScript, variables and functions are hoisted (moved at the top of the function) but variables don't retain any assigned value.
*/

function test() {
	console.log(a); // undefined
	console.log(foo()); // 2

	var a = 1;

	function foo() {
		return 2;
	}
}

test();

/*
10. THIS

In JavaScript, the thing called "this", is the object that "owns" the JavaScript code. The value of "this", when used in a function, is the object that "owns"
the function. The value of "this", when used in an object is the object itself. The "this" keyword in an object constructor does not have a value.
*/

var fullname = "John Doe";
var obj = {
	fullname: "Colin Ihrig",
	prop: {
		fullname: "Aurelio De Rosa",
		getFullname: function() {
			return this.fullname;
		}
	}
};

console.log( obj.prop.getFullname() ); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log( test() ); // John Doe

/*
The code prints Aurelio De Rosa and John Doe. The reason is that the context of a function, what is referred with the "this" keyword, in JavaScript depends on how
a function is invoked, not how it's defined.
*/

// FIX 1: using bind()

var test2 = obj.prop.getFullname.bind( obj.prop );
console.log( test2() );

// FIX 2: using call()

console.log( test.call( obj.prop ) );


/*
11. INSTANTLY-INVOKED FUNCTION EXPRESSIONS (IIFE)

*/

(function() {
	var a = b = c = 5;
})();

console.log( a ); // undefined :  because only in scope of function
console.log( b ); // 5 :  because b is assigned to the global scope
console.log( c ); // 5 :  ^same reason


/*
Use "use strict" to enable strict mode. The code would raise the error "Uncaught ReferenceError:b is not defined". Remember that strict mode requires you to explicitly
reference to the global scope if this was the intended behavior. So, you should write:
*/

(function() {
	'use strict';
	var a = window.b = c = 5;
})();

console.log( a ); // undefined
console.log( b ); // 5
console.log( c ); // undefined 