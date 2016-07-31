/*
	Things that could have been added to other sections of the course but weren't to prevent distracting from key ideas.
*/

/*
	Initialization
		- using object literal and array literal sytanx can be nice to use when setting up some mock data
		- be careful and to use : rather than = when setting properties in objects

	typeof, instanceof, and figuring our what something is
		- Dynamic Typing Let's us do a lot of useful things, but can also be dangerous when we can a var to one value but we expect another..
		- typeof
			- tells us the type of an object
		- instanceof
			- tells us if any object down the prototype chain of the first object has a type of the second object
*/

var a = 3;
console.log(typeof a); // number

var b = "hello";
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // object
console.log(Object.prototype.toString.call(d)); // [object Array]  (Better!!!)

function Person(name) {
	this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); // object
console.log(e instanceof Person); // true

console.log(typeof undefined); // undefined (makes sense)
console.log(typeof null); // object (a bug in javascript since forever..)

var z = function() {};
console.log(typeof z); // function

/*
	Strict Mode:::
		- tells the javascript engine that you'd like it to process your code in a stricter way.
		- "use strict"; must go at the top of a file or at the top of a function.
		- For example, we must declare a variable in order to set it to some value.
		- For safe code, it is better to wrap your code in an IIFE and place 'use strict' at the top of the function
		- Not every javascript engine implements "use strict"; in the same way.
		- Since this is an opt-in feature and yet every engine implements it in a different way, you can't completely rely on it.
		- HOWEVER, it can be useful!! Hence, you should almost always use it by default
*/

var person;

persom = {};
console.log(persom); // Works fine.. even though we misspelled 'person'

/*
	Using strict mode
*/


"use strict";

var person;

persom = {};
console.log(persom);

