/*
    SOLID Go Design 
    - Dave Cheney
*/
/*
    Bad Code

    - Rigidity
        - Hard to change
    - Fragility
        - Slightest changes leads to havoc 
    - Immobility
        - 1 step away from an import loop
    - Complexity
        - Overly complex for no reason other than just to be complex 
    - Verbosity
        - When you look at it, can you even tell what it's supposed to do

    
*/
/*
    Good Design 

    Robert Martin's book:
        Agile Software Development

    SOLID: 
        - Single Responsibility Principle
        - Open / Closed Principle 
        - Liskov Substitution Principle 
        - Interface Segregation Principle 
        - Dependency Inversion Principle 
*/
/*
    Single Responsibility Principle
        - "A class should have 1 and only 1 reason to change." - Robert Martin
        - In Go we have composition

    Why is this important? 
        - Code that your code depends on may change. 
        - Code that has a single responsibility has the fewest 
        reasons to change

    Coupling & Cohesion
        - Coupling: A movement in 1 results in a movement in another
        - Cohesion: A force of mutual attraction
            - Pieces of code that are naturally attracted to one another

        Package names
            - In Go, code lives within a package. 
            - A well designed package starts with its name. 
                - The package's name is a description of its purpose.
                - namespace prefix
                - e.g. net/http, os/exec, encoding/json
                - Bad package names: 
                    - package server, private, common
                - Go's UNIX philosophy
                    - Small sharp tools that embody a single task. 
*/
/*
    Open / Closed Principle 
        - "Software entities should be open for extension, but closed 
            for modification." - Bertrand Meyer, Object-Oriented Software Construction
*/
package main 

type A struct {
    year int
}

func (a A) Greet() { fmt.Println("Hello GolangUK", a.year) }

type B struct {
    A
}

func (b B) Greet() { fmt.Println("Welcome to GolangUK", b.year) }

func main() {
    var a A 
    a.year = 2016
    var b B 
    b.year = 2016
    a.Greet() // Wlecome GolangUK 2016
    b.Greet() // Wlecome to GolangUK 2016
}

/*
    Liskov Substitution Principle 
        - "Require no more, promise no less." - Jim Weirich
        - 2 types are substitutable if they exhibit behavior such that the caller 
            is unable to tell the difference. 
        - In class-based languages LSP is commonly interpretted as a specification
            for an unknown base class with various concrete subtypes. 
        - In Go we don't have classes and inheritance. Substitution is the pervue 
            of Interfaces. 
            - Any type inherits an interface simply by having a matching method set. 

    Small interfaces lead to simple implementations which further leads to packages that 
    contain simple interfaces with simple implemantations that are connected with 
    a common behavior. 
*/

type Reader interface {
    // Read reads up to len(buf) bytes in buf.
    Read(buf []byte) (n int, err error)
}

/*
    Interface Segregation Principle 
        - "Clients should not be forced to depend on methods they do not use." - Robert C. Martin 
        - Isolating the behavior of 1 function to do its job. 
*/  

// Save writes the contents of doc to the file f.
func Save(f *os.File, doc *Document) error