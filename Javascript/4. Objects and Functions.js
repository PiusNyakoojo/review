/*
	Objects and Functions

	While in other programming languages, objects and functions are 2 distinct things to talk about, in javascript, they are very
	much related. In many ways, they are the same subject.

	Objects are collections of name-value pairs. Those values can be other collections of name-value pairs.

	In memory, objects can have properties and methods
		- primitive values (e.g. boolean, number, string) AKA "property"
		- another object AKA "property"
		- functions AKA "method"
			- When a function is connected to an object, it is called a method

	An object sits in memory at a certain address and contains references to the methods and properties that it contains
	that are elsewhere in memory.
*/

var person = new Object();

person["firstName"] = "Pius";
person["lastName"] = "Nyakoojo";

var firstNameProperty = "firstname";

console.log(person); // { firstname: "Pius", lastname: "Nyakoojo", __proto__: Object }
console.log(person[firstNameProperty]); // Pius


/*
	using new Object() is not the preferred way of creating objects, but we will use it temporarily just to make it clear that 
	we are creating an object.
	
	[] is known as a computed member access operation. Basically it allows you to access methods and properties of objects.

	You'll see the [] operator used in libraries because you can decide what property you want to get dynamically, based on a string
	that might be a variable you can change.
	
	member access operator: '.'
	computed member access operator: '[]'


	Although, using the . operator makes it more clear what property or method we are retrieving from an object.

	The preferred member access operator is the dot operator because it's clean, clear and makes it easier to debug problems.
*/

console.log(person.firstname); // Pius

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "Kansas City";
person.address.state = "Missouri";

/*
	Objects and Object Literals

	Instead of creating an object with new Object() we can use {}

	{ name: "value", name2: "value2" } is the Object Literal syntax
*/

var person = { 
	firstname: 'Pius', 
	lastname: 'Nyakoojo',
	address: {
		street: "111 Main St.",
		city: 'Kansas City',
		state: 'Missouri'
	}
};
console.log(person);

/*
	Framework Aside:
		- Faking Namespaces

	A Namespace is a container for variables and functions. Typically to keep variables and functions with the same name separate.
		- Javascript does not have a built in namespace system.
	
	Instead of having variables collide with each other in the same object:
*/

var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);

/*
	We can separate them into different objects:
*/

var english = {};
var spanish = {};

english.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english.greet);

/*
	JSON and Object Literals

	JSON - JavaScript Object Notation
		- Inspired by the Object Literal notation by javascript
		- property names are wrapped in quotes
			- in javascript, they're not wrapped in quotes
			- Hence JSON is sort of like a subset of object literal notation

	To convert a javascript object into a JSON valid string use 
*/

var string = JSON.stringify({ firstname: "Pius" });
var json = JSON.parse(string);

/*
	Functions and Objects

	In Javascript, Functions are Objects. In fact, functions are first-class objects

	First Class Objects means that everything you can do with other types you can do with functions.
		- Assign them to variables,
		- pass them around as parameters,
		- create them at runtime

	Functions are special types of objects because they have all the features of a normal object, and yet has some other
	special properties. Some people are surprised that you can attach properties and methods to a function. Well, don't be surprised
	because since functions are objects that means you can attach primitive types, objects and other functions (methods) to 
	any function.
	
	There are 2 import properties that functions have that make them "special":
		- Name
			- This is optional as some functions can be anonymous
		- Code
			- This property is where the actual lines of code that you've written are located.
			- The code that you write gets set into a special property of a function.
			- This property is invokable, meaning that you can say "run this code".. and the execution context is created, etc..

*/

function greet() {
	console.log('Hello');
}

greet.language = 'english'; // Since functions are objects, we can add properties to them

console.log(greet); // prints the text of the function

console.log(greet.language); // english

/*
	So when we created the greet function, The Global Execution Context places the function (which is an object) in memory and
	adds the function as a property to the global object.
	
	So the name property of the function is : greet
	The code property of the function is : console.log('Hello');

	calling greet(); will invoke the code property

*/

/*
	Function Statements and Function Expressions
	
	Function Statements just do work. They are the lines of code that run when a function is executed. statements don't return values

	Function Expression on the other hand end up returning a value that doesn't have to be stored in a variable
		- A unit of code that results in a value. It doesn't have to save to a variable.
	

	1 + 2; // this is valid javascript.. this is an expression that returns a value.. in this case 3

	Inside of an if statement, you place an expression, because that returns a value.

	In javascript, because functions are objects, there are function statements and function expressions.
*/

var a;

// these are expressions
a = 4; // 4
1 + 2; // 3
a === 3 // false

if (a === 3) { // the if statement itself is just a statement.

}

// this would be invalid because if() {} is not an expression.. it's a statement
/*
	var b = if (a === 3) { }
*/

/*
	Is this a function expression or function statement?
	
	This is a function statement because it doesn't return a value until it is invoked. During the execution phase,
	the javascript engine doesn't do anything when it finds that function, it skips over it and finds the next line of code
	to run.

	function greet() {
		console.log('hi');
	}
	

	This is a function expression (because it results in a value):

	var anonymousGreet = function() {
		console.log('hi');
	}
*/

/*
	Conceptual Aside: By Value and By Reference

	Let's say we have 2 variables a, b and we assign b to the value of a.. what does javascript do with this under the hood?

*/

var a;

var b = a;

/*
	Well, if a is a primitive value, then b points to a new location in memory that contains a copy of the value from a.
		- This is what's known as passing by value.

	However, if a is an object, then b points to the same location in memory as a. The object isn't copied, it simply exists
	in the single location and both a and b reference that location in memory.
		- This is what's known as passing by reference.
		- All objects are passed by reference when being passed to a function or being set to one another.
		- This can cause problems if you don't understand this.
*/

// by value (primitives)

var a = 3; // reference 0x0001 (for example) that contains the value 3
var b;
b = a; // references 0x0002 (for example) that contains the value 3

console.log("a: " + a + ", b: " + b); // a: 3, b: 3

// Thus if we change either a or b, they won't effect one another because they're referencing different places in memory

a = 2;

console.log("a: " + 2 + ", b: " + b); // a: 2, b: 3


// by reference (objects (including functions))

var c = { greeting: 'hi' };
var d = c;

console.log("c: " + c.greeting + ", d: " + d.greeting); // c: hi, d: hi

// d now points to the same location in memory that c points to. Hence if we change either c or d, then both variables will be effected

d.greeting = 'hello'; // mutating: to change something. If something is immutable, then it can't be changed.

console.log("c: " + c.greeting + ", d: " + d.greeting); // c: hello, d: hello

// by reference (even as parameters)

function changeGreeting(obj) {
	obj.greeting = 'hola';
}

changeGreeting(d);

console.log("c: " + c.greeting + ", d: " + d.greeting); // c: hola, d: hola

// equals operator sets up new memory space (new address)

c = { greeting: 'howdy' };
console.log("c: " + c.greeting + ", d: " + d.greeting); // c: howdy, d: hola

/*
	Objects, Functions, and 'this'

	When a function is invoked the execution context is created. The Execution Context is responsible for what happens when you run that
	code in the code property of the function.

		- Recall that an execution context has a variable environment to specify where the variable lives.
		- Execution context also has a reference to the outer environment (where it sits lexically in the code).
			This tells the context how to look down the scope chain. In other words, if a variable isn't found
			in the current scope, the function will search in the outer environment's variable environment and so on
			until it finds a reference or results in no defined error.
		- Creates 'this' that points to a certain object depending on how the function is called, and where the function
			is located lexically.

*/

function a() {
	console.log(this);
}

var b = function() {
	console.log(this);
}

a();
b();

/*
	Inside of a function the 'this' keyword will still point to the lexical environment's execution context object. In this example,
	'this' references the global object window (in the browser)

	When we're just invoking a function, the this keyword references the global object (in this example)
*/

var c = {
	name: 'The c object',
	log: function() {
		console.log(this);
	}
};

c.log(); // returns a reference to the object c

/*
	The 'this' keyword will reference the object that the function is attached to. Since the method is attached to an object,
	it is also called a method.

	What is the output of the following??:
*/

var c = {
	name: '0',
	log: function() {
		this.name = '1';
		console.log(this.name);

		var setName = function(newname) {
			this.name = newname;
		}

		setName('2');

		console.log(this.name);
	}
}

c.log();

/*
	To save you the headache.. what happens is a little unexpected.
	
	The output is:
	1
	1

	Why? Well, when we set the name using the setName function instead of attaching the name property to log or even to the
	c object itself, it attaches to the global object window (in the browser). A lot of developers think this is a bug that
	the people who designed javascript didn't think of..

	To fix this problem we can reference a premade variable (lets call it self) that reference the object we're interested in.
	In our case, the c object
*/

var c = {
	name: '0',
	log: function() {
		var self = this;

		self.name = '1';
		console.log(self.name);

		var setName = function(newname) {
			self.name = newname;
		}

		setName('2');

		console.log(self.name);
	}
}

/*
	No programming language is perfect. Regardless, there are patterns we can adopt to get around problems we might encounter
	to the languages.

*/

/*
	Arrays
		- Arrays are collections of things
		- new Array();
		- array literal syntax: []

	Javascript arrays are a bit different from arrays in other languages because javascript is dynamically typed. We can have
	different types of items in a single array like ["hello", 1, false, { name: "Pius" }, [1, 2, 3], function(){console.log("hey")}]

*/


var arr = [
	1,
	false,
	"Hello",
	{
		name: "Pius"
	},
	[0, 1, 2],
	function(name) {
		console.log(name);
	}
];

console.log(arr); // no error :D

arr[5](arr[3].name); // Pius

/*
	'arguments' and Spread

	If you're looking at current code in frameworks or libraries, you're likely to come accross the 'arguments' keyword.
	In ES6 'arguments' won't be used as there will be a different way, but it's still useful to know
	about with ES5 being the most adapted standard of javascript in web browsers today.

	When Execution Context is created
		- Variable environment for our variables
		- Outer environment for our scope chain
		- 'this' to reference an object depending on where the function is attached or how it's invoked
		- Setups up another special keyword called 'arguments'

	'arguments' contains a list of all the values of all the parameters that you pass to a function. 'arguments' holds
	all the parameters that you pass to whatever function you're calling.

	The concept of Arguments in general is just another way of saying the parameters you pass to a function.
		- Arguments are a universal concept in programming languages, however
		- Javascript gives you a keyword of the same name which contains them all.


*/

function greet(firstname, lastname, language) {

	console.log(firstname);
	console.log(lastname);
	console.log(language);

	console.log('--------------');

}

greet(); // undefined undefined undefined
greet('John'); // John undefined undefined
greet('John', 'Doe'); // John Doe undefined
greet('John', 'Doe', 'es'); // John Doe es

/*
	In the next version of Javascript (ES6) there will be a way to set a default value to a parameter if it isn't passed when the function
	is called:
*/

function greet(firstname = 'John', lastname = 'Doe', language = 'es') {
	//...
}

/*
	However, currently, the best method to handle the case of parameters not being passed is to use the || operator:
*/

function greet(firstname, lastname, language) {
	firstname = firstname || 'John';
	//..
}

/*
	Now let's use the keyword 'arguments'. Notice that when we print the arguments, the brackets are italicized. That's
	because javascript makes 'arguments' array-like.. That means it acts like an array, looks like an array.. but it isn't
	exactly a javascript array.. In other words, it doesn't have all the features of a javascript array.

	A lot of developers say that the designers got this wrong..
*/

function greet(firstname, lastname, language) {
	console.log(arguments); // italiced brackets [] containing the values of the passed arguments from left to right

	if (arguments.length === 0) {
		console.log('missing parameters');
		return;
	} else {
		console.log('arg0: ' + arguments[0]);
	}
}

/*
	It's worth mentioning that arguments will eventually be deprecated. Meaning that it will still be around so old code
	functions properly, but it won't be used as much in practice. The newer method is to use the spread parameter.
	
	The spread allows you to add on as many other parameters as you'd like and stores them in an array that you give
	a name to. other isn't completely available yet, but once it becomes available, it will be the preferred way of
	dealing with various sequences of arguments
*/

function greet(firstname, lastname, language, ...other) {
	console.log(other[0].state); // Missouri
}

greet('Pius', 'Nyakoojo', 'en', {
	street: '111 Main st.',
	city: 'Kansas City',
	state: 'Missouri'
}, {
	occupation: 'Web Developer',
	hobby: 'Eating green tea ice cream'
});

/*
	Framework Aside: Function Overloading
		- Function overloading means you can have functions of the same name but with different numbers of parameters
		- Javascript doesn't have function overloading as a lot other programming languages do.
		- Function overloading doesn't really work in javascript because functions are objects.
	
	Instead of function overloading, we can name functions slightly different from the main function we want to use
	and pass the parameters we want to that most general form of the function.

	This is one approach of dealing with function overloading
*/

function greet(firstname, lastname, language) {
	language = language || 'en';

	if (language === 'en') {
		console.log('Hello ' + firstname + ' ' + lastname);
	} else if (language === 'es') {
		console.log('Hola ' + firstname + ' ' + lastname);
	}
}

function greetEnglish(firstname, lastname) {
	greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
	greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

/*
	Conceptual Aside: Syntax Parsers
		- Recall, the code you write isn't directly run on the computer. There is an intermediary program between your
			code and the computer that translates your code into something the computer can understand. The javascript
			engine for example does this.
		- One of the aspects of the Javascript engine is the Syntax Parser which reads your code and determines if it
			is valid and what it is you're trying to do.

	For example, when the syntax parser reads an 'r' by itself, it will expect that you are going to use the keyword
	'return'. As it scans the line character by character 'r' to 're' 'ret', etc.. if it sees a deviation from what it
	expects, then it will throw an error.
	
	The Syntax parser reads your code making sure it adheres to certain rules. It can even make changes to your code before
	it is exectured (for example adding a semicolon at the end of a statement).


	Dangerous Aside: Automatic Semicolon Insertion

	You might recall that semicolons are optional in javascript. You don't have to place a semicolon at the end of a statement. WHY!?

	Because the javascript Syntax Parser can add a semicolon to places in your code where it expects that there should be a semicolon.
	For example, after the 'return' keyword.

	So actually, semicolons are semi-optional.. In general, you should always place your own semicolons to avoid the syntax parser
	having to do this for you and to avoid potetional debug errors.

	Here is an example of when depending on the Syntax Parser's automatic character insertion can result in bugs:
*/

function getPerson() {
	return
	{
		firstname: "Pius"
	}
}

console.log(getPerson()); // undefined

/*
	Should be::
*/

function getPerson() {
	return {
		firstname: "Pius"
	};
}

console(getPerson());

/*
	Framework aside: Whitespace
		- Invisible characters that create literal 'space' in your written code
		- e.g. Carriage returns, tabs, spaces
		- They make your code more readable
		- Javascript is very liberal in terms of how much whitespace it allows

*/

var
	// first name of the person
	firstname,

	// last name of the person
	lastname,

	// the language the person speaks.
	// can be 'es' or 'en'
	language;


var person = {
	// the first name
	firstname: 'John',


	// the last name
	// (always required)
	lastname: 'Doe'
};

console.log(person);

/*
	Immediately Invoked Function Expressions (IIFEs)
		- Calling a function immediately after it's created



*/

var greeting = function(name) {
	return 'Hello '  + name;
}("Pius");

console.log(greeting); // Hello Pius

/*
	To have a function expression without assigning the function to a variable we can wrap it in parantheses.

	Remember that parantheses only wrap around expressions.. not statements
	
	// This is invalid

	(if(true){
		//..
	});
*/

// Function expression
(function(name){
	var greeting = 'Inside IIFE: Hello ';
	console.log(greeting + ' ' + name)
}("Pius"));

// You can also invoke the function from outside the parantheses.. there isn't a best practice or "right way"

(function(name){
	var greeting = 'Another IIFE: Hey ';
	console.log(greeting + ' ' + name);
})();