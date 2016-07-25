/*
	Javascript code is loaded, then the syntax parser starts parsing the code.

	An execution context is always created on the global leven when running a javascript file.
	4 important things are created for us at runtime.
		- Global object (window if you're running JS in the browser)
		- keyword "this" which references the global object
		- A link to the Outer environment of the object
			- At the global level, the outer environment is null
		- Your code. Your code sits inside of the execution context 

	Global means "not inside a function". Code or variables that aren't inside a function are
	global. When variables or functions are created globally, they are attached to the global
	object (i.e. window in the browser).

*/

/*
	The Execution Context - Creation and Hoisting

	As discussed previously, the execution context is created for us at runtime and wraps around
	our javascript code along with creating a global object referenced by this and a link to
	the outer environment for each object.

	Most programming languages wouldn't allow this to work properly:

	b();

	function b() { console.log("Hello"); }

	This is because b is being invoked before it's declared and most languages require the declaration
	of functions before its invokation.

	The Execution Context is created in 2 phases: Creation and Execution

	First Phase - Creation Phase:
		- Global object is setup in memory
		- 'this' is setup in memory
		- An outer environment is created
		- Sets up memory space for variables and functions (mistakenly refered to as hoisting)
			- This happens before the javascript engine executes your code line by line
			- The function in its entirety is placed into memory space
			- However, variables are given the value of undefined because during the setting
				up of memory, the execution context doesn't know what the value of the variable
				is until runtime.
				- All variables in javascript are initially set to undefined.

	Second Phase - Execution Phase:
		- Our code is run line by line

	
	Conceptual Aside:

	'undefined' keyword
	Every variable in javascript are initially set to undefined. undefined is a special value that
	javascript comes with and should be used to reference variables that haven't been set yet.
	It is bad practice to set a variable to undefined. undefined should mean that 'I as the programmer
	haven't set the value of this variable'. Instead, set a variable to null.

	Conceptual Aside:

	Single-threaded execution
		- Only 1 command is executed at a time.

	Synchronous
		- 1 line of code executed at a time.. In order that it appears

	Asynchronous
		- More than 1 at a time.
*/

/*
	Function Invocation and the Execution Stack

	Function Invocation is simply running (or calling) a function with ()

	When a function is invoked, a new execution context is created and placed on the execution
	stack. And a stack is exactly as it seems. There is one execution context on top of another
	on top of another etc..

	So when a new execution context is created, the creation and execution phases take place
	once again. Whichever execution context is on top is the one that's currently running.

	When the top execution context is complete, that context is popped off the stack and the
	next execution context is continued.
*/

/*
	Functions, Context and Variable Environments

	Variable Environments are where the variables live and how they relate to one another in memory.
	Every Execution Context has its own Variable Environment.
*/

/*
	Scope Chain

	Every Execution context has a reference to the outer environment. In the case of function b and a below, the outer
	environment is the global environment. The outer reference depends on where the function sits lexically
	
	Lexically, function a and b sits on top of the global environment.

	If the javascript engine can't find a reference to the variable within its scope, it will search for it in the scope of
	the outer reference. This will continue until the variable reference is found or until the global environment is reached
	and a variable is not defined error occurs.
*/

function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

/*
	Scope:

	Where a variable is available in your code.. And if it's truly the same variable or a new copy

	ES6 is the latest specification of javascript and it's introducing a new keyword: "let"

	let allows the javascript engine to use what's called "block scoping". With let, you can declare a variable as you would
	with var and during the creation phase the variable is still placed in memory and set to undefined. However, you're not
	allowed to use that variable until it is set (i.e. the line of code is run) in the execution phase. It's still in memory
	but the engine just won't allow it.

	Another aspect of "let" is that it is defined within a block (which is generally a set of {}). When a let variable is 
	declared inside a block, it's only available within that block at that period in time.

	So even with a for loop, if you use the "let" keyword, you'll get a different variable in memory each time the loop runs

*/

for (let i = 0; i < 5; i++) {
	console.log("this is a completely different variable in memory: i = " + i);
}

for (var i = 0; i < 5; i++) {
	console.log("Here we use the same memory for the variable just change the value at run time: i = " + i);
}

/*
	Asynchronous callbacks?

	Well, to understand how javascript handles asynchronous events, we will first discuss how the Javascript engine works.

	Within a browser, the javascript engine doesn't exist by itself. There are other pieces of code running independently of the
	javascript engine.Although these things do run asynchronously within the browser, what's happening JUST in the javascript 
	engine is synchronous.

	For example:
		- Rendering Engine
			- Renders the content to the screen
			- The javascript engine has hooks so that it can talk to the rendering engine and change what the webpage looks like.
		- HTTP Request
			- There is a piece of the browser responsible for going out and retrieving data through http requests
			- The javascript engine can talk to the HTTP Request engine to go out and request data

	So what happens when we go out and make a request or handle a click event? Other parts of the browser are handling these things
	while the javascript code is still running.
	
	(Recall that queues are first-in-first-out priority and stacks are last-in-first-out)

	Similar to the Execution Stack, there's another list that sits inside of the Javascript engine called the Event Queue. The Event
	Queue is full of events (or notifications of events that might be happening). So when the browser, outside of the javascript engine
	has an event that within the javascript engine we want to be notified of, that event is placed on the queue.

	The Event Queue is looked at by the Javasript engine when the Execution Stack is empty! When the stack is empty, the Javascript engine
	periodically looks at the event queue and waits for something to be there. If something is there, it checks to see if that particular
	event should be triggered.

	For example, if a click event is on the queue, the clickEventHandler function is invoked and the execution context for that function is
	placed on the Execution stack. When the function is completed, the click event is removed from the queue and when the execution context
	is clear, the next item in the queue is processed.

	So the code that the JavaScript engine manages is still being executed line by line, but the browser adds Events to the Event Queue
	asynchronously.
*/

function waitThreeSeconds() {
	let ms = 3000 + new Date().getTime();
	while (new Date() < ms){}
	console.log('finished function');
}

function clickHandler() {
	console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

/*
	This code demonstrates how the Event Queue works. Even if we click before the 3 seconds is complete, our event won't be handled until
	the Execution Stack is empty (this includes the global Execution context is completed also).

	What is the sequence of the output if we click before the 3 seconds??
*/