/*
	In order to have a proper mental model of Node.js we need to understand how the V8 Javascript Engine works. This is the core of Nodejs.
	
	In order to understand the V8 Engine, we need to understand Processors, Machine Code and C++.

	A microprocessor is a tiny machine that work in tandem with electrical inputs and ultimately do some job. We give the microprocessor
	instructions. These instructions are given in a specific language. However, not all microprocessors are the same. In fact, they don't
	all speak the exact same language. In general a microprocessor will "speak" one of these languages:
		- IA-32
		- x86-64
		- ARM
		- MIPS
	Keep in mind that the processor is a physical device and that it's just a machine that accepts instructions and carries them out. When
	we say instructions, we mean a computer code.. in general we are talking about Machine Code.

	Machine Code/ Machine Language:
		- Programming languages spoken by computer processors. Every program you run on your computer has been converted (compiled)
			into machine code.. In particular, it is compiled into the machine code that your computer's processor speaks.. Whether
			that's ARM, MITS, x86, x64, IA-32 or others. So when someone says that they have an ARM processor, they mean that their
			processor communicates using the ARM language.. or that it accepts instructions that are based on ARM standards.

	Ultimately, when we are writing in a programming language, there is some other process that's converting what we're writing into
	something the processor can understand. Sometimes your program is converted into many different languages so that it can run on
	many different processors on different computers.

	So why don't we write machine code directly? Well, some people do. But there's a reason NOT to do it. Let's take a look at how
	some machine code looks like:

	000018A45438100        0   44      push rbp
	0000018A45438101       1   4889e5  REX.W movq rbp, rsp

	That's enough... Now remember, that different instruction sets will look different for different machine languages that will direct
	different processors. Instead of writing directly in machine code, we write in languages that are directly compiled into machine code.

	And as time has passed, developers have continued to abstract away the process of writing programs in machine code.. in other words,
	we seem to be getting farther and farther away from this hard to read syntax.

	Generally this is a nice visualization of this level of abstraction







              Javascript      - very far removed from the processor because we don't deal directly with where memory is and how it's moved; An engine is placed between YOUR CODE and the microprocessor that's taken care of for you.
               C / C++        - still used heavily today; in fact, javascript was inspired by C syntax e.g. {} and functions; also gives degree of contol that's lower level
          Assembly Language   - a bit easier to read than machine language
	       Machine Language   - varies depending on the microprocessor (e.g. ARM, MITS, x86, x64, IA-32, etc..)
	------- Microprocessor -------
	
	Here's something that some people don't understand about Node.js:
		- Node.js is written in C++ WHY???
		- Because V8, the javascript engine that powers node is written in C++
			- V8 is the javascript engine that essentially converts javascript to machine code.
*/

/*
	Javascript Aside: Javascript engines and the ECMASCRIPT specification

	ECMASCRIPT:
		- The standard javascript is based on. Needed a standard since there are many engines that interpret javascript in slightly different ways.
		- Javascript was created first. But companies like microsoft, apple and google made their own engines and made a few tweaks. Thus some
			people got together and formed the ECMA to have a standard that all these browser vendors should follow so code doesn't easily break
			across browsers.
		- In other words, if you were to write your own javascript engine, what you cause javascript to do should match the specifications of the
			ECMA specifications. The specification is just something that everyone has agreed upon.. that this is the way javascript should work.


	A Javascript Engine:
		- A program that converts javascript code into something the computer processor can understand. And it should follow the ECMAScript standard
			on how the language should work and what features it should have.
*/

/*
	Google's Javascript engine: V8 is Open source (code.google.com/p/v8)
		- V8 was primarily written to be used within the google chrome browser, however, it's also built in a way that would allow it to be used
			elsewhere.
		- V8 takes Javascript code and input and outpus machine code for the specific processor our computer uses.
		- In addition, we can take V8 and place it within our own C++ program and somewhere in our program we will be able to convert javascript
			to machine code. And because we're using V8, there are hooks we can use to add features to javascript before compiling it.
		- V8 can run standalone, or can be embedded into any C++ application!!!
			- There's an entire guide on how to embed V8 into your C++ application.
			- V8 has hooks that we can access through C++ program.
			- If someone writes something in javascript, we can respond to that by doing additional things with our own custom C++ code. So essentially
				we are adding custom features to how javascript behaves. Our program will read and understand more than what the ECMASCRIPT standard
				specifies and what the V8 engine implements. This is really powerful because C++ has far more features that javascript does. Javascript
				was designed to be a browser language. It wasn't designed to deal with lower-level operations like dealing with files and folders
				that are sitting on your harddrive or connecting directly to a database. C++ was designed to do that. C++ was designed closer to the
				machine.

				So that means we can write things in C++ that javascript doesn't have. We can make anything we can do in C++ available to the javascript
				code.

	If we build the V8 engine we can go to build/Debug/shell.cc and run that through the CLI in windows.

		shell
			- This command will run the shell and we can type javascript code and see what the engine does with that code e.g.
				var a = 1; a // 1

		shell --print_code
			- This command will run the shell and also print out the machine code for this particular machine that the V8 engine returns.

	In the shell.cc file we can tell the V8 engine to take any statement that says 'print' and map it to the C++ native print function.
	So even though print() isn't defined in ECMASCRIPT standards (actually, you can use print() to print a page), we've allowed it to mean
	something by attaching this interpretration in our C++ application.
	
	load('somefile.js'); can also be made to work even though load() is not defined in ESCMASCRIPT standards.
	
	This is essentially what Node.js is.. it is a C++ application that has V8 embedded and adds a bunch of features to javascript that are 
	available to us in C++. Nodejs in particular has added the features that make it suitable to be web server technology.

	So what are the features that Nodejs adds to V8?? Well that's what we'll talk about for the rest of the course..
*/
