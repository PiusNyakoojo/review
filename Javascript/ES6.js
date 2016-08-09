/*
1. CONSTANTS

Support for constants (also known as "immutable variables") i.e. variables which cannot be re-assigned new content.
Notice: This only makes the variable itself immutable, not its assigned content (for instance, in case the content
is an object, this means the object itself can still be altered)

USE: Helps to 
*/

const PI = 3.14159;
PI > 3.0 // true
PI = 2.5 // INVALID

const greeting = { sayHello: "hello", sayHi: "hi" };
greeting = { sayHello: "hello", sayHi: "hi" }; // INVALID
greeting = { sayGoodbye: "bye", sayHi: "hi" }; // INVALID

greeting.sayHello = "goodbye"; // WORKS

/*
2. SCOPING (VARIABLES and FUNCTIONS)

Declare block-scoped variables, functions and constants without hoisting.
let allows you to declare variables that are limited in scope to the block, statement, or expression on which it
is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function
regardless of block scope.

USE: let sometimes makes the code cleaner when inner functions are used.
*/

/* EXAMPLE 2a */
var a = 5, b = 10;

if ( a === 5 ) {
	let a = 4; // The scope is inside the if-block 
	var b = 1; // The scope is inside the function

	console.log(a); // 4
	console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1

/* EXAMPLE 2b */

var list = document.getElementById("list");

for (let i = 1; i <= 5; i++) { // note that if var i were used instead...
	let item = document.createElement("li");
	item.appendChild(document.createTextNode("Item " + i));

	item.onclick = function (ev) {
		console.log("Item" + i + " is clicked." ); //... i would be 6 since we're refering to the same var i; but let creates a new instance of i for each iteration of the loop.
	};

	list.appendChild(item);
}

/* EXAMPLE 2c -- Block-scoped functions */

{
	function foo() { return 1 }
	foo() === 1
	{
		function foo() { return 2 }
		foo() === 2
	}
	foo() === 1
}

/*
3. ARROW FUNCTIONS

An arrow function expression has a shorter syntax compared to function expressions and lexically binds the this value (does not bid its own this, arguments, super, or new.target).
Arrow functions are always anonymous.

*/

setTimeout(() => console.log("hey"), 3000);
