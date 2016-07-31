
// ; is used in case some other libraries didn't finish their statement with ;.. this makes sure it's finished just in case

;(function(global, $) {

	// return instance of object so user doesn't have to use 'new'
	var Greetr = function( firstName, lastName, language ) {
		return new Greetr.init(firstName, lastName, language);
	}

	// hidden within the scope of the IIFE and nevery directly accessible
	var 
		// supported languages
		supportedLangs = ['en', 'es'],

		// informal greetings
		greetings = {
			en: 'Hello',
			es: 'Hola'
		},

		// formal greetings
		formalGreetings = {
			en: 'Greetings',
			es: 'Saludos'
		},

		// logger messages
		logMessages = {
			en: 'Logged in',
			es: 'Inicio sesion'
		};

	// Methods inherited through the prototype chain from our objects
	Greetr.prototype = {

		// return full name
		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		// check if language is supported
		validate: function() {
			if ( supportedLangs.indexOf( this.language ) === -1 ) {
				throw "Invalid Language";
			}
		},

		// informal greeting text
		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},

		// formal greeting text
		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		},

		// greet with selected formality type
		greet: function( formal ) {
			var msg;

			// if undefined or null it will be coerced to 'false'

			if ( formal ) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if ( console ) { // IE doesn't have a console unless it is open manually
				console.log(msg);
			}

			// 'this' refers to the calling object at execution time
			// makes the method chainable
			return this;
		},

		// log message for developer
		log: function() {
			if ( console ) { 
				console.log( logMessages[this.language] + ': ' + this.fullName() );
			}

			return this;
		},

		// expose language to be set by developer
		setLang: function(lang) {

			this.language = lang;

			this.validate();

			return this;
		},

		// write text to innerHTML of object use jQuery
		HTMLGreeting: function( selector, formal ) {

			if ( !$ ) {
				throw 'jQuery not loaded';
				// document.querySelector(selector).innerHTML = this.greet( formal );
			}

			if ( !selector ) {
				throw 'Missing jQuery selector';
			}

			var msg;

			if ( formal ) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			$( selector ).html( msg );

			return this;
			
		}
	};

	// Our object's function constructor
	Greetr.init = function(firstName, lastName, language) {

		var self = this;

		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en';

		// validate the language
		self.validate();
	};

	// trick borrowed from jQuery so don't have to use the 'new' keyword when creating object
	Greetr.init.prototype = Greetr.prototype;

	// attach our Greetr to the global object, and provide a shorthand 'G$' for ease of use
	global.Greetr = global.G$ = Greetr;

}( window, jQuery));