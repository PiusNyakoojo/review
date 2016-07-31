/*
	Learning from other peoples' good code!!
		- Read other peoples' source code
		- An Open Source Education
		- Github
*/

/*
	Deep dive into Source Code
		- We'll look at jQuery
		- We won't try to see how every feature is implemented.
		- We will see if we can read the code and if we can learn how it's structured and borrow similar techniques

	jQuery is a javascript library that makes it easier to write certain things and has polyfills for certain features.
	jQuery allows us to manipulate the DOM (Document Object Model).

	The DOM is separate from the javascript engine. It decides how to render content on the page
*/

var q = $('ul.people li');
console.log(q);

/*
	Method chaining
		- Calling one method after another, and each method affects the parent object.

	So...

		obj.method1().method2() where both methods end up with a 'this' variable pointing at 'obj'.

*/