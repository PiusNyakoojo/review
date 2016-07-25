/*
	Types and Javascript

	Dynamic Typing: You don't tell the engine what type of data a variable holds (i.e. primitive type),
	it figures it out while your code is executing.

	When using a language like Java or C#, you tell the compiler ahead of time what type of data is held in this variable. This
	is known as static typing.

	bool isNew = 'hello'; // an error
*/

var isNew = true; // no errors
isNew = 'yup!';
isNew = 1;

/*
	Primitive Types (there are 6 in Javascript)
		- a type of data that represents a single value
		- that is not an object
	
	undefined
		- represents lack of existence (you shouldn't set a variable to this)
	null
		- represents lack of existence (you can set a variable to this)
	boolean
		- true or false
	number
		- floating point number (there's always some decimals). Unline other programming languages, there's only one 'number' type..
			and it can make math weird.
	string
		- a sequence of characters (both '' and "" can be used)
		- in some programming languages a string is more complex and treated as a sequence of characters, but in javascript, string
			is considered a primitive type
	symbol
		- used in ES6 (the next version of Javascript)..
		- We won't talk about this here..

*/

/*
	Operators
		- A special function that is syntactically (written) differently than other functions you'll have in your code.
		- Generally, operators take two parameters and return one result.

	=, ==, ===, +, -, *, /, >, >=, <, <=, etc..


*/

var a = 3 + 4;


/*

function add(a, b) {
	//..	
}

var a = add(3, 4); // This is equivalent to using + operator (a special function in javascript)

function +(a, b) {
	// return add the two numbers
}

var a = +(3, 4); // Instead of writing this, javascript provides In-fix notation for operators

In-fix notation:

var a = 3 + 4;

*/

/*
	Operator Precedence and Associativity
		- Operator precedence means which operator function gets called first. Functions are called in order of precedence (HIGHER precedence
		wins)
			- Remember that operators are just functions. So if we have 3 + 4 * 5, the JS engine has to decide which function to execute first
				since it is synchronous. Operator precendence is built into the language and thus this example will invoke * then + since
				* has a higher precedence than +
		- Operator Associativity is the order the operator gets called in: left-to-right or right-to-left
			- When functions have the same precedence, the associativity is taken into account.

	A table of operator precendence:::

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

var a = 3 + 4 * 5;
console.log(a); // result?

var a1 = 2, a2 = 3, a3 = 4;

a1 = a2 = a3;

console.log(a1);
console.log(a2);
console.log(a3);

/*
	What is the result?

	Since = has the same precendence as itself, consider the associativity.. which order will the javascript engine assign the value?
*/

/*
	Coersion:
		- Converting a value from one type to another
		- This happens quite often in Javascript because it's dynamically typed.

	To see what a value will coerce to for a number value, we can use Number()

	Number("3"); // 3
	Number(false); // 0
	Number(true); // 1
	
	Number(null); // 0
	Number(undefined); // NaN (this means, not a number), NaN can sometimes be treated as a primitive type

*/

var a = 'hello ' + 'world';
console.log(a); // hello world

var b = 1 + '2';
console.log(b); // 12 (1 is coerced to a string)

/*
	Comparison operators
		- There are special cases when coercion doesn't do as we would expect without looking at a table.

	false == 0 // true

	null == 0 // false

	null < 1 // true

	"" == 0 // true

	"" == false // true

	String Equality and String Inequality compares 2 values but DOES NOT try to coerce the values.

	3 === 3 // true

	"3" === "3" // true

	3 === "3" // false

	99% of the time, you should use String Equality and String Inequality checks. Don't use == unless you explicitly want to
	coerce the values that you're comparing

	Equality Comparisons Table:::
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

*/

console.log(1 < 2 < 3); // true

console.log(3 < 2 < 1); // result?? hint: The operator precedence of < is left-to-right

/*
	Existence and Booleans

	It's not recommended to use Boolean(), Number(), etc.. in production code.

	Boolean(undefined); // false
	Boolean(null); // false
	Boolean(""); // false
	
	Coersion is usefule when we want to check if a variable has a value (something other than undefined, null, ""). The exception is
	when the value is 0
	
	To handle this we can have:
*/


	if (a || a === 0) {
		//..
	}

	// if there's no chance that the object is 0 then we can have 

	if (a) {
		//..
	}

/*
	Default Values
	
	When we don't pass parameters to functions, we can set default values to prevent unexpected results

*/

function greet(name) {
	name = name || '<Your name here>';
	console.log('Hello ' + name);
}

greet();

/*
	Recall that when we call greet, a new exection context is pushed on the Execution Stack and set the variable name in memory
	as if it were declared within the function. To prevent receiving undefined, a lot of legacy code uses the || operator to set
	a default value if the parameter isn't set.

	The || Operator doesn't just return true of false, it returns that value that can be coerced to true.

	true || false // true

	undefined || "hello" // hello

	"hi" || "hello" // hi (it will return the first value that coerces to true)
*/

/*
	Framework Aside:
		- For our purposes, we'll assume a framework and a library are the same thing. They're just a grouping of javascript tasks
			intended to be reusable.

	Imagine we are using 2 libraries and have our main application script:
*/

// lib1.js

var libraryName = "Lib 1";

// lib2.js

var libraryName = "Lib 2";

// main.js

console.log(libraryName); // Lib 2 :O

/*
	Oops, our libraries have collided! What can we do?

	Well, we can check to see if the libraryName is already in the global execution context:

	window.libraryName = window.libraryName || "Lib 2";
*/