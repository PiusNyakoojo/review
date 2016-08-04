/*
	To understand what concurrency is we need to understand some of the underlying processes that the computer undertakes.

	Computers execute programs on microprocessors or sometimes just called processors. These are actual pieces of hardware
	that we instruct to perform some computation. These processors understand a specific language. Generally this language
	is called machine code but there are different types of machine code languages. For example, ARM, MIPS, x64, x86 and more.
	When we write code in Go, C++, javascript or any other programming language, there is a compilation step that takes
	our code and reduces it to a specific machine code language that the processor of our computer can understand. Different
	processors can understand different languages.

	When people hear the word concurrency they often think of parallelism, a related but quite distinct concept.

	In programming, concurrency is the composition of independently executed processes. Concurrency is about DEALING with lots
	of things at once.

	Parallelism is the simultaneous execution of (possible related) computations. Parallelism is about doing lots of things
	at once.

*/