/*
	We don't have to write semicolons in go because they are automatically insterted by the compiler. In fact,
	because go is an opinionated language, there are certain coding styles we have to adhere to. For example,
	we can place the opening bracket of a function on the next line, it has to be on the same line as the function
	name.
	
	Occasionally we'll add semicolons. For example, if we have 2 statements on the same line, we'll add a semicolon
	in between them.
*/

package main // the main package

import "fmt"

func main() {
	fmt.Print("Hello, first one!") // no new line
	fmt.Println("Hello world") // new line
}

/*
	This is a simple go program.
	
	package
		- allows us to declare what package that this go program belongs to
		- like a folder where we organize our code in folders.
		- For example, we can have a package solely responsible for doing cryptography work
		- we could have a package responsible for doing networking, formatting, unit testing, etc.

	import
		- allows us to import other packages or other peoples code.

	golang.org
		- will only contain documentation on the standard library
		- we can view all the source files that go into a package with
			golang.org/src/<package-name>
			e.g. golang.org/src/fmt
		- we can view the documentation of a package with
			golang.org/pkg/<package-name>

	godoc.org
		- will contain documentation on the standard library, and documention of other packages written by
		other people (so called '3rd party packages')
*/