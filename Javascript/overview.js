/*
Syntax Parsers
	- A program that reads your code and determines what it does and if its grammar is valid

Execution Contexts
	- Where something sits physically in the code you write

Lexical Environments
	- A wrapper to help manage the code that is running

*/

/*
There's always a global object in javascript. In the webbrowser, it's a Window object

Global Context is created first
	- this keyword
	- If in browser, this refers to a Window object

Execution Context is created in 2 phases (Creation Phase, and Execution Phase)
	- Creation Phase
		- Global object is created with 'this' keyword
		- As the parser reads your code, it recognizes where you've created variables and where you've created functions.
			So it sets up memory space for variables and functions.. This is what's known as hoisting
	- Execution Phase
		- Code is executed line by line
		- Starting from the global execution context, then when a function is invoked, a new execution context is 
			put on the execution stack

Hoisting
	- When the execution context sets up memory space for variables and functions
	- Functions are stored into memory in their entirety (i.e. everything within {})
	- Variables are assigned the placeholder 'undefined' until execution


Single Threaded
	- One command at a time


Synchronous Execution
	- One line at a time in the order it appears

Execution Stack
	- Anytime you execute or invoke a function, a new execution context is created and placed on the execution stack

Variable Environments
	- Where the variables live and how they relate to each other in memory
	- Every execution context has its own variable environment
	- This has something to do with scope: which means where are we able to see the variable?
	- Every variable env. has a reference to its outer environment: The lexical environment

Scope
	- Where a variable is available in your code. And if it's truly the same variable, or a new copy

let
	- declare variables with block scoping.
	- variable can only be used within this block of code.

Asynchronous
	- More than one at a time
	- Asynchrony happens outside of the javascript engine itself. For example the event queue gets events
		added to it by other parts of the browser rather than the JS engine.

Event Queue
	- A queue of events to be executed
	- The events are handled (i.e. the eventHandler() is placed on the execution stack where its context is 
		created and executed)
	- Only when the execution stack is empty will the event queue push the eventHandler to the execution stack


Dynamic Typing
	- You don't tell the engine what type of data a variable holds, it figures it out while your code is running
	- Variables can hold different type of values because it's all figured out during execution
	- At different times during the execution, variables can be different types based on their data

Static Typing
	- You tell the engine ahead of time what type the variable is (i.e. bool isNew = 'hello'; // an error)


Primitive Types (6 types in JavaScript)
	- A type of data that represents a single value
	- That is not an object::::
	1 undefined
		- represents lack of existence (you shouldn't set a variable to this)
	2 null
		- represents lack of existence (you can set a variable to this)
	3 boolean
		- true or false
	4 number
		- floating point number (there's always some decimals)
	5 string
		- a sequence of characters (both '' and "" can be used)
	6 symbol
		- used in ES6 (the next version of JavaScript; not fully supported by all browsers)


Operator
	- A special function that is syntactically (written) differently
	- Generally, operators take two parameters and return one result

Operator Precedence
	- Which operator function gets called first
	- Functions are called in order of precedence
	- Higher precedence wins

Associativity
	- What order operator functions get called in: left-to-right or right-to-left
	- When functions have the SAME precendence

Coercion
	- Converting a value from one type to another
	- This happens quite often in Javascript because it's dynamically typed

*/

