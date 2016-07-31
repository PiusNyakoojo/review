/*
	1. What should our framework/library be called?!
		- Let's call it Greetr
		- When given first name, last name, and optional language, it generates formal and informal greetings.
		- Support English and Spanish languages.
		- Reusable library/framework.
		- Easy to type 'G$()' structure.
		- Let's assume a lot of people who use Greetr are also using jQuery.. So Greetr should support jQuery
			- If we pass a greeter object a span or div, it will fill it with appropriate greeting text

	2. Let's start with structuing our application so it is safe to use

	3. Now we need to setup our Greetr object.
		- We will set it up the way jQuery is setup

		To use Greetr we want to do

		var g = G$(firstname, lastname, language); // returns an object
*/