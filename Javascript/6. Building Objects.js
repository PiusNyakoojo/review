/*
	Building Objects
		- We've already seen one way to build objects: using object literal syntax to create objects on the fly.. there are also other ways.
	
	Function Constructors, 'new' and the History of Javascript:::

		Javascript was first written by Brandon Icke and the name was designed to attract Java developers.. Java developers were
		also used to using the 'new' keyword along with Classes to create instances of objects.
*/

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

var john = new Person();
console.log(john); // Person {firstname: John, lastname: Doe};

/*
	The 'new' keyword is actually an operator
		- An empty object is created immediately.
		- Then the function is invoked. When the function is invoked
			- When the function is called, we know the execution context generates a variable called 'this'
			- In the case that we use the keyword 'new', it changes what the 'this' keyword points to.
			- 'this' points to that new empty object that is created
				- Hence any properties or methods we add to 'this' are added to the empty object
			- As long as this invoked function doesn't return a value, the javascript engine will return the object that
				was created by the new operator
	
	A function that is used specifically to construct an object is called a Function Constructor.
		- Function constructors are just functions.. we haven't changed how functions work by calling the 'new' operator.
			- The important thing to remember is that placing the 'new' operator in front of a function sets the 'this' keyword
				to point to an empty object that is return by the javascript engine as long as the function doesn't return a value
		- So we can pass values to the Function Constructor just as we would with 'regular' functions..

	Function Constructors:
		- A normal function that is used to construct objects
			- The 'this' variable points to a new empty object, and that object is returned from the function automatically.
*/

function Person(firstname, lastname) { // this function is executed line by line even if we use 'new'.. just as any other function
	this.firstname = firstname;
	this.lastname = lastname;

	console.log('Hi, my name is: ' + firstname + ' ' + lastname);
}

var jane = new Person('Jane', 'Doe');
console.log(jane); // Person { firstname: 'Jane', lastname: 'Doe' }

console.log(jane.__proto__); // Person {}

/*
	Prototypes allow us to inherit properties and methods from other objects.
	

	Remember when we said how functions get special properties like 'name' and 'CODE'. 
	Another property that all functions get is'prototype'

	As soon as you use the 'new' operator to create a function, the prototype property means something. The 'prototype' property is specifically
	used for when you're building functions to build objects (e.g. as Function Constructors).

	We already saw that in some cases we can use __proto__ to get access to the prototype of an object. But the 'prototype' property on a function
	IS NOT the prototype of the function. It's the prototype of the objects created if you're using the function as a function constructor.

	The 'prototype' property starts its life as an empty object that we can add on to.

	So jane.__proto__ === Person.prototype and john.__proto__ === Person.prototype
*/

Person.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastname;
};

/*
	We can add properties and methods to the prototype of the function constructor on the fly.

	So in a lot of really good javascript libraries we'll see that properties are added in the function constructor..
	methods on the other hand are added to the prototype property of the function constructor.

	So why not add the method inside the function constructor initially?!?!
		- You could, but remember, functions in javascript are objects.. they take up memory space. Anything you add to the function
			takes up memory space. So if we added a method to every object through the function constructor, that would take up a lot
			of space if we have a lot of objects.. That means every object gets its own COPY of the same function.. a function that
			does the same thing.......
		- On the other hand, if we add a function to the prototype, all the objects that are created will reference that one function
			because they all have a reference to the same prototype object (in our case Person.prototype)
		- So from an efficiency standpoint, it's better to place global properties and methods (those things that won't change from one
			object to another) as properties on the function prototype.
*/

/*
	Dangerous Aside: 'new' and functions.
		- if we forget to add the 'new' keyword in front of a function constructor call.. the function will still be executed.. And since
			the function constructor doesn't return anything explicitly, it will return undefined. So the variables you try to set with the
			constructor call will be set to undefined
		- A convention that we follow to indicate a function constructor is to use a capital letter as the first letter of the function's name.

*/

/*
	Conceptual Aside: Built-in function constructors

		- If we wanted, we could add methods to all String objects in javascript
		- You want to be carefull by not overriding pre-exiting properties or methods..

	Although javascript is nice enough to convert a string to a string object that we can call methods and get properties of, it's
	not nice enough to convert numbers
	

	Number.prototype.isPositive = function() {
		return this > 0;
	};


	"John".length; // 4

	3.isPositive(); // Doesn't work

	var a = new Number(3);

	a.isPositive(); // true
*/

var a = new Number(3); // Number {[[PrimitiveValue]]: 3}

String.prototype.isLengthGreaterThan = function(limit) {
	return this.length > limit;
}

console.log("John".isLengthGreaterThan(3)); // true

/*
	Dangerous Aside: Built-in Function Constructors
		- It's better in general to not use the built in function constructors (i.e. Number, Boolean, Object, String, etc..)
		- Use literals!!! (i.e. 3, "John", true, { firstname: 'Jane' } )
*/

var a = 3;

var b = new Number(3);

a == b // true (coercion happens)

a === b // false (not the same time.. b is an object and 3 is a primitive value)

/*
	If you're doing a lot with dates, use momentjs rather than the built in Date function construction
*/

/*
	Dangerous Aside: Arrays and for(.. in ..)

		- Arrays are objects, so actually we can do the same thing and use for.. in ..
		- The fact that arrays are objects adds some problems if we try to add a functionality to arrays with Array.prototype
			- So in case of arrays, don't use for.. in.. Instead, use the var i = 0; i < length; i++ syntax
*/

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
	console.log(prop + ': ' + arr[prop]);
}

/*
	0: John
	1: Jane
	2: Jim
*/

Array.prototype.myCustomFeature = 'cool!';

for (var prop in arr) {
	console.log(prop + ': ' + arr[prop]);
}

/*
	0: John
	1: Jane
	2: Jim
	myCustomFeature: cool!
*/

/*
	What we've seen thus far is one way to create objects using function constructors. Function constructors were designed to mimic
	other languages (that don't implement prototypal inheritance)
		- Other languages implement classes which define what an object should look like .. then you use the 'new' keyword to create
			that object. That's what function constructors are trying to mimic.
		- On the other hand, many find it useful to take into account the fact that javascript does use prototypal inheritance instead
			of classical inheritance and accept it.. or embrace it. And so another way to create objects.. that doesn't try to mimic
			other programming languages.. and something that all newer browsers have built in is called Object.create

	Object.create!!!!!
*/

var person = {
	firstname: 'Default',
	lastname: 'Default',
	greet: function() {
		return 'Hi' + this.firstname;
	}
};

var john = Object.create(person);
console.log(john); // Object { firstname: 'Default', lastname: 'Default', greet: function}

/*
	john.__proto__ === person
	
	In other words, the prototype object is set to the object that we pass into Object.create();

	The pattern to creating an object with its own values is to override the default values as follows:
*/

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';
console.log(jane); // What is the output?!

/*
	Polyfill:
		- Code that adds a feature which the engine may lack.
	
	Object.create() is relatively new.. what happens when the browser doesn't support it?! Do you have to use function constructors?!
	Not necessarily. We can use polyfills to add the Object.create() functionality to the browser.
*/

// polyfill
if (!Object.create) {
	Object.create = function(o) {
		if (arguments.length > 1) {
			throw new Error('Object.create implementation only accepts the first parameter.');
		}

		function F() {}
		F.prototype = o;
		return new F();
	};
}

/*
	ES6 and Classes
		- The next version of javascript (ES6) has a new way to create objects and set prototypes called classes
		- Classes in other programming languages are popular.. however, javascript doesn't have classes.
		- The next version of javascript will have classes but they will look different.

	A Javascript Class will define an object
		- The constructor method will act somewhat like the constructor in other languages in that you can preset the values
			of the object.
*/

class Person { // In javascript, this is an object!!!
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet() {
		return 'Yo ' + this.firstname;
	}
}

var john = new Person('John', 'Doe');

/*
	The difference is that in other programming languages, Class is not an object. It's just a definition.. or a template
	of how something will look like.

	extends will set the prototype of the function constructor


*/

class InformalPerson extends Person {
	constructor(firstname, lastname) {
		super(firstname, lastname); // calls the constructor of the prototype object
	}

	greet() {
		return 'Yo ' + this.firstname;
	}
}

/*
	Syntactic Sugar:
		- A different way to type something that doesn't change how it works under the hood..

*/