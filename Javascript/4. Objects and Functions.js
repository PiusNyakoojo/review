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
	it is executed (for example adding a semicolon at the end of a statement).


	Dangerous Aside: Automatic Semicolon Insertion

	You might recall that semicolons are optional in javascript. You don't have to place a semicolon at the end of a statement. WHY!?

	Because the javascript Syntax Parser can add a semicolon to places in your code where it expects that there should be a semicolon.
	For example, after the 'return' keyword.

	So actually, semicolons are semi-optional.. In general, you should always place your own semicolons to avoid the syntax parser
	having to do this for you and to avoid potential debug errors.

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
	To have a function expression without assigning the function to a variable we can wrap it in parentheses.

	Remember that parentheses only wrap around expressions.. not statements
	
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

// You can also invoke the function from outside the parentheses.. there isn't a best practice or "right way"

(function(name){
	var greeting = 'Another IIFE: Hey ';
	console.log(greeting + ' ' + name);
})();

/*
	Immediately Invoked Function Expressions (IIFEs) and SAFE CODE
	
	Okay.. so as we've mentioned previously, when a javascript program is run, the global execution context
	is created.. if there are no variables or functions defined and only our IIFE, during execution time, when the
	engine is parsing this code, it will create the execution context of the IIFE on the fly.. Whatever variables
	are defined within the function expression are part of the variable environment of the function.. BY THE WAY..
	it's treated as an anonymous function so we couldn't access it from the global 'this' object.

	Notice that the variables within the IIFE do not collide with the variables outside of the IIFE.. 
*/

//------ greet.js ------------------
var greeting = 'Hola';

//-------- main.js --------------------

(function(name){
	var greeting = 'Hello';
	console.log(greeting + ' ' + name);
}('Pius'));

// What is the output?!?!?

console.log(greeting); // what is the output??


/*
	What if you want to effect the global object?! Well, you can pass it as a parameter::
*/

(function(global, name){
	var greeting = 'Hello';
	global.greeting = 'Hello';
	console.log(greeting + ' ' + name);
}(window, 'Pius'));

/*
	Understanding Closures
		- Closures are absolutely vital to understand in order to write javascript.
	
	The following code looks straight forward right?! well let's write it again....
*/

function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	}

}

greet('Hi')('Pius'); // Hi Pius

/*
	Let's write this again as follows to make it clear what the confusion might be...
*/

var sayHi = greet('Hi');
sayHi('Pius'); // Hi Pius

/*
	So how does the sayHi function still know the whattosay variable??!?! How does it know that we set the
	whattosay variable to Hi when we called the greet() function.. didn't we just return the function...?

	After we call greet, it returns the function.. that means it's popped off the execution stack.. its execution context
	is over.. how does our sayHi function still have access to the whattosay variable
	that was part of the execution context of greet.. which is now gone (e.g. popped off the stack)?!

	How does the returned function still have the proper value of the whattosay variable??

	Well, this is possible because of CLOSURES..

	Well, as we've mentioned, when the global execution environment reaches the var sayHi = greet('Hi'); a new execution
	context is created and pushed to the execution stack. Within this execution context our function creates a function
	on the fly and returns it.. along with that it also has its own variable environment.. regardless.. the greet execution
	context is popped off the stack right after the return

	Now the question is.. we said every execution context has this space in memory where the variables inside of the context
	live.. What happens to that memory space when the execution context goes away? Well, under normal circumstances the
	javascript engine would eventually clear it out with a process called garbage collection..

	But at the moment the execution context finishes, that memory is still there.. It's still hanging around. The execution
	context may be gone but the variables are just sitting there somewhere in memory.

	Alright.. so we move on to the global execution context and invoke the function that sayHi is pointing to.. it's an
	anonymous function because we didn't give it a name when returning it and the act of invoking it creates a new execution
	context.. And we've passed the name variable and set it to 'Pius' and that will end up in the variable environment
	for this execution context..

	When we hit the line console.log(whattosay + ' ' + name); .. when its code is invoked and javascript sees the whattosay
	variable, what does the javascript engine do?!!?!?

	Well, it goes up the scope chain to find the variable whattosay.. and even those the execution context for greet is
	gone.. the anonymous function still has a reference to its outer lexical environment and hence the variable environmnet
	for this memory space..

	In other words.. even those the greet function is finished, any function within the greet function.. when they are called..
	they will still have a reference to that greet function's memory.. to the variables and functions that were in its execution
	context

	In this situation we say.. the execution context has "closed in" its outer variables.. The variables that it would normally
	have reference to anyway.. even though those execution contexts are gone.. So this phenomenon of the execution context
	closing in all the variables it would normally have access to is called a closure..

	A closure isn't something you type or tell the javascript engine to do. Closures are simply a feature of the javascript
	programming language. They just happen. We don't have to make sure that the execution context of the outer environment is running..
	The javascript engine will make sure that the current execution context will have access to the variables that it's supposed
	to have access to.. It will make sure that its scope is intact
*/

/*
	Understanding Closures Part 2:::
		
		- When doing research on closures, you're bound to run into this example as far as why closures can make your code hard to
			anticipate. But if you understand what's going on under the hood, that's actually not the case.. so we'll look at this
			example and analyze it to see if we can have a clear understanding of what's going to happen when the code is run.
*/

function buildFunctions() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			function() {
				console.log(i);
			}
		)
	}
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

/*
	What do you expect the output to be!?!??!

	var i and arr are also called free variables - variables that are outside of the function that you have access to..

	So how can we preserve the value of i when we access it later from our functions??
		- In ES6, 'let' will allow us to create block-scoped variables. Essentially, these variables will have distict memory
			space in each block from the memory space outside that block
		- In order to preserve i we need to execute a function on the fly to preserve the variable in its own execution context
*/

function buildFuctions2() {
	var arr = [];
	for (var i = 0; i < 3; i++) {
		arr.push(
			(function(j){
				return function() {
					console.log(j);
				}
			}())
		);
	}
}

var fs2 = buildFuctions2();

fs2[0]();
fs2[1]();
fs2[2]();

/*
	Framework Aside: Function Factories
		- A factory is a function that returns (or makes) other things for you.

	So the makeGreeting factory will return another function.



*/

function makeGreeting(language) {
	return function(firstname, lastname) {
		if (language === 'en') {
			console.log('Hello ' + firstname + ' ' + lastname);
		} else if (language === 'es') {
			console.log('Hola ' + firstname + ' ' + lastname);
		}
	}
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');


/*
	greetEnglish is a function object whose closure points to language being 'en' whereas
	greetSpanish is a function object whose closure points to language being 'es'.

	It's important to realize that even though it's the same function being called, a new execution context
	is created and new memory space is allocated for that execution context.

	So we're using makeGreeting as a function factory.. essentially to make functions that always have access to the
	initial parameter that we pass.

	Any function that's created within another function has a reference to the variables of its outer environment..
	The CLOSURE of a function is the closing in of the variable in the outer environment.. in other words, the current
	execution context will always have a reference to the variables in its outer environment.

	Although closures may be a difficult thing to wrap your head around at first go, you've probably already used
	closures if you've written javascript
*/

/*
	If you've used jQuery or setTimeOut you've taken advantage of closures!!
*/

function sayHiLater() {
	var greeting = 'Hi';

	setTimeOut(function() {
		console.log(greeting);
	}, 3000);
}

sayHiLater();

/*
	Callback function:
		- A function you give to another function, to be run when the other function is finished.
		- So the function you call (i.e. invoke), 'calls back' by calling the function you gave it when it finishes.
*/

function tellMeWhenDone(callback) {
	//.... some work

	callback();
}

tellMeWhenDone(function() {
	console.log("I am done...");
});

/*
	Call(), Apply(), and Bind()

	An execution context has 3 main things that are created for us as we've discussed:::
		- Variable Environmnet
		- 'this' (e.g. window in browser) or the object that contains the function we're running in
		- Outer Environment
	
	Wouldn't it be nice to control what the 'this' keyword ends up being when the execution context is created??!?!
	Well Javascript has a way to do that.. that's where call, apply and bind come in!!

	We could have talked about this before when we talked about objects, functions and 'this', but in order to understand
	call, apply and bind we needed to have a complete understanding of first-class functions..

	So we already know that functions are special types of objects::
		- name property (optional if function is anonymous)
		- code property (this is invokable and allows the function to be invoked)
		- All functions have access to a call(), apply() and bind() method
			- All 3 of these have to do with the 'this' keyword and all the variables you pass to the function as well.
			- Recall that the 'this' keyword references the object that contains the method

*/

var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function() {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}

// This by itself will fail.. why!??!
var logName = function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
}

logName();

// Why will this work?!

var logPersonName = logName.bind(person); // we are passing the object that we want to be the 'this' variable within the function

logPersonName();

/*
	Recall that all functions have the methods bind, apply and call.

	The bind() function returns a new copy of the function that it's invoked from. So that when the returned function is run and its
	execution context is created, the javascript engine sees that it was setup with the bind method and thus sets up some things in 
	the background so that when the javascript engine decides, what is the 'this' variable.. it says, oh, well it must be the object
	that was passed into bind()..

	So essentially, we're effecting the javascript engine as far as what it decides when creating the 'this' variable during the
	creation phase of the execution context
*/

/*
	When calling a function we can use call() and if need by we can pass the object that we want the 'this' keyword to be.

*/

// These are equivalent!!!
logName();
logName.call(); 

// This changes the 'this' keyword to be the person object
logName.call(person); 

// We can also pass parameters to call.. these parameters will be passed to the logName function!!
logName.call(person, 'en', 'es');

// With apply() we pass an array of the parameters!!!
logName.apply(person, ['en', 'es']);


/*
	bind() sets the 'this' keyword to the object that's passed.. without invoking the function.. in fact a new reference is created.

	call() sets the 'this' keyword to the object that's passed and can access arguments that will be passed to the function.. using
	this method invokes the function but uses the same reference rather than creating a new function..
	
	apply() does the exact same thing as call() except that we pass the arguments in an array!!!
		- An array can be more useful, especially under mathematical circumstances..
	
	What if we use call or apply with and IIFE?!
*/

(function() {

	console.log('Logged: ' + this.getFullName());

}).apply(person, ['en', 'es']);

/*
	When could you actually use these methods in real-world applications?!?!?

	With bind(), you're creating a new copy of the function.. so what happens when you pass parameters to bind() ??!
	Setting parameters to bind() sets permanent values to the parameters when the copy is made..
*/

// Example 1: Function borrowing

var person2 = {
	firstname: 'Pius',
	lastname: 'Nyakoojo'
};

console.log(person.getFullName.apply(person2));

// Example 2: Function currying

function multiply(a, b) {
	return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);

/*
	By setting 2.. we're saying that the first parameter 'a' will always be a 2 in this copy of the function..

	It is equivalent to the following

		function multipleByTwo(b) {
			var a = 2;
			return a*b;
		}

	Recall, bind() doesn't invoke the function but rather returns a new function.. well in our new function, we've set
	the a value to be permanently 2.. so when we call multiplyByTwo we pass a single variable which will be 'b'
*/

console.log(multipleByTwo(4)); // 8

/*
	Function currying:
		- Creating a copy of a function but with some preset parameters..
			- very useful in mathematical situations.

*/

/*
	Functional Programming!!!
		- Although javascript sounds like it's related to the java programming language or looks like the C# or C++..
			it really has more in common with other functional programming languages. Languages like lisp, or schema
			or ML.. these are languages that have first-class functions
	
*/

function mapForEach(arr, fn) {
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		);
	}

	return newArr;
}


var arr1 = [1,2,3];
console.log(arr1);

/* Old code... not functional
var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
	arr2.push(arr1[i] * 2);
}
*/

var arr2 = mapForEach(arr1, function(item){
	return * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
	return item > 2;
});

/*
	Segmenting code into functions is called functional programming.. This is very useful
*/

var checkPastLimit = function(limiter, item) {
	return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);