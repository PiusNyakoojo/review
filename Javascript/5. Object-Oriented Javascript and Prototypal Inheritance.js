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