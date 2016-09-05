/*
    What I learned:

    Variadic functions
        - functions that accept an arbitrary amount of arguments (0 or many).
        - use the spread operator ... to specify that a function accepts multiple arguments of a given
        type
            function (numbers ...int) {
                // numbers is of type []int
            }
        
    Defer is a keyword that defers a function call.. or calls a function right before the current function 
    it's within finishes execution. defer is often used to close files or end some process before a certain 
    process concludes execution

        for example

        file, err := os.Open("src.txt")
        // handle err
        defer file.Close() // closing the file later

    defer also executes defered functions in a first in last out manner.. So if we have

        defer function1()
        defer function2()
        defer function3()

    the functions will be executed in the order: 

        function3()
        function2()
        function1()

    right before the parent function terminates.

    Reference types are types that reference some data. So when passing a reference type to a function, 
    you don't need to pass its reference value by using the dereferncing operator * because it is already
    a reference to some data. 

    Func Expressions are expressions that return a value of type func(<params>) <returns>

    Everything in Go is pass by value. 

    A lot of functional programming techniques are possible with Go, but aren't always best practice. Always
    err on the side of clarity rather than complexity.

    Functions are meant to separate functionality into other blocks. This function does this, that function does 
    that. Packages are meant to contain functions that operate towards a common goal.

    Functions abstract the details of a certain process. In other words, they hide the implementation by simply
    producing a result in an expected manner. For example, the average func that we wrote abstracts the details
    of the calculation and simply provides us with an interface where we pass the list of numbers we want to 
    know the average of.

    Code Reusability is also very important. 
*/