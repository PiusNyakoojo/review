/*
    https://golang.org/ref/spec#Declarations_and_scope

    Scope
        - Where do I have access to a variable?
        - This is similar to the "lexical environment" of a variable in javascript.

    Levels of Scope
        - Universe
        - Package 
        - File 
        - block (curly braces)

    FYI
        - {} - braces, curly braces, curlies, mustaches
        - [] - brackets
        - () - parentheses, parens

    Package level scope
        - for variables
        - not for imports

    File level scope
        - imports
        - "fmt" is not available in our packages at the package level unless our package name is "fmt"
        - But we shouldn't have package names that mimic the standard library names. So we import files 
        to get access to their visible fields, like Printf in "fmt".

    Block level scope
    Keep your scope tight
        - declare your variables as close to where you're using them as possible.
        - You don't want your variables to be accessible outside of where you're using them because if you
        have a bunch of variables outside, you may have variable collisions, shadowing, accidentally assigning
        values to the wrong variable, having the wrong value in the wrong place, etc.. 
*/


/*
    Visibility and scope are different but very similar in that they are responsible for where variables 
    are accessible within your go program: whether it's a specific file, function or even package.


*/

// this does not compile because the scope of x is not within foo

package main

import "fmt"

func main() {
    x := 42
    fmt.Printf("%v", x)
    foo()
}

func foo() {
    fmt.Printf("%v", x)
}

/*
    In the following case, we learn that the scope of a variable within a function begins at where that variable
    is declared. Thus, it matters where x is declared in main
*/

func main() {
    fmt.Printf("%v", x)
    x := "hello"
}

var y = "brains"

/*
    Since y is outside of a function, its scope is the entire file and is in fact accessible to files within
    the same package.
*/

/*
    Variable shadowing
        - naming a variable the same name as a function
        - this is bad coding practice
*/

func max(x int) int {
    return 42 + x
}

func main() {
    max := max(23) // bad coding practice
    fmt.Println("%T", max) // max is now the result, not the function
}