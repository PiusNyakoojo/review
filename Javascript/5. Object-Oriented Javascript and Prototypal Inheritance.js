/*
	Object-Oriented Javascript
	
		- What is Inheritance?!
			- One object gets access to the properties and methods of another object

	Classical Vs Prototypal Inheritance

		- Classical Inheritance
			- We're familiar with this sort of inheritance from languages like C# and Java..
			- It's a way of sharing properties and methods from other objects
			- It has been the most popular way of doing things in Javascript for the longest time
			- Verbose
				- Can end up with large trees of objects that inherit from one another and can be hard to keep track of..
				- A bunch of keywords flying around like friend, protected, private, inheritance, etc..

		- Prototypal Inheritance
			- This is much simpler (however it's not perfect)
				- Flexible, extensible, easy to understand

	What is the Prototype?!
		- All objects (including functions) have the prototype property

	Let's say we have an object called obj
*/

var obj = {
	prop1: 1
};

/*
	Let's say we try to access prop2 with obj.prop2..

	If the javascript engine doesn't find this property at the root of obj, it will look at:::

		obj.proto.prop2
	
	If the engine finds it there, it will return the value of that prop2

	Similarly, the prototype object obj.proto is an object and hence can have its own prototype property:::

		obj.proto.proto... etc..

	When using the . operator or ['some_property_or_method'] javascript will look down the prototype chain to find a property
	if it's not at the root.

	If we have another object say obj2
*/

var obj2.proto = obj.proto;

/*
	Remember that objects are passed by reference when setting one object to another. So in this case obj2 has the same prototype
	as obj
	
	So obj2.prop2 will return the same property as obj.prop2.. the same value from the same memory space
*/

var person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
};

var john = {
	firstname: 'John',
	lastname: 'Doe'
};

/*
	Don't do this in real-world applications because it causes performance loss in the application.. This is for demonstration only
*/

john.__proto__ = person; // John now inherits from the person object

console.log(john.getFullName()); // John Doe
console.log(john.firstname); // John (because the javascript engine found firstname at the root of the prototype chain)

/*
	Notice that the getFullName method recognizes the object that originated the call.. hence the this.firstname reference John
*/

var jane = {
	firstname: 'Jane'
};

jane.__proto__ = person;

console.log(jane.getFullName()); // Jane Default

/*
	Everything is an object (or a primitive) in javascript

		- The base object 'Object' is at the very bottom of the prototype chain ALWAYS
			- All objects get access to .toString()

		- The prototype of all function is function Empty() {}
			- All functions get access to the .apply(), .bind(), .call()

		- The prototype of all arrays is an empty array []
			- All arrays have access to .push(), .pop() etc..
			- Because any array we create, the javascript engine sets its prototype to this build in javascript object
*/

var a = {};
var b = function() {};
var c = [];

/*
	a.__proto__ // Object {}
	b.__proto__ // function Empty() {}
	c.__proto__ // []
	
	b.__proto__.__proto__ // Object {}
	c.__proto__.__proto__ // Object {} // remember because that's at the bottom of the prototype chain always?!
*/

/*
	Reflection and Extend

		- Reflection
			- An object can look at itself, listing and changing its properties and methods.
			- We can use this to implement a very useful design pattern called 'Extend'

*/

var person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
};

var john = {
	firstname: 'John',
	lastname: 'Doe'
};

// Don't do this....

john.__proto__ = person;

for (var prop in john) {
	console.log(prop + ': ' + john[prop]);
}

/*
	firstname: John
	lastname: Doe
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}

*/

/*
	Woah! This might look strange because we only set the direct properties of john to be firstname and lastname.

	However, it appears that the javascript engine went down the prototype chain and grabbed the other properties and methods
	(in our case, the getFullName method)

	This can be useful but what if we just want to grab the properties and method at the root.. rather than within the prototype chain?
	
	Use .hasOwnProperty()
		- This doesn't sit on john or person, it sits on the base object of john
*/

for (var prop in john) {
	if (john.hasOwnProperty(prop)) {
		console.log(prop + ': ' + john[prop]);
	}
}

/*
	firstname: John
	lastname: Doe
*/

/*
	This is how we can reflect on the object and look at its properties.. Look at what's call 'metadata' of its properties
	Whether that data is really attached to the object or not.

	This reflection concept in turn lets us implement an idea that is very useful. It's sort of a complement to prototypal inheritance.

	But it's not built into javascript. So many frameworks and libraries build it themselves.. it's called Extend!!!!

	The underscore library implements this and we can use it if we include the library!!
*/

var jane = {
	address: '111 Main St.',
	getFormalFullName: function() {
		return this.lastname + ', ' + this.firstname;
	}
};

var jim = {
	getFirstName: function() {
		return firstname;
	}
};

/*
	Maybe one of these objects has a lot of properties and methods that we don't want to be in the prototype chain of
	another object. So this is where extending comes into play.
*/

// Here, we are extending john

_.extend(john, jane, jim);

/*
	this composes or combines these objects. It takes all the properties and methods of these other objects and adds them
	directly to john
*/

console.log(john);

/*
	Object {
		firstname: 'John',
		lastname: 'Doe',
		address: '111 Main St.',
		getFormalFullName: function() {// ...},
		getFirstName: function() {// ...},
		__proto__: Object
	}

*/