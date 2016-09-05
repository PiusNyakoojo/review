/*
    When talking about functions it's important to note that main is the entry point to running a program.
    func main should also be in your package that's called main. 
*/

/*
    func <receiver> (<parameters>) <return types> {

    }

    Parameters vs Arguments
        - A function is declared with parameters 
        - When calling a function, we pass arguments that will be the initial values of the parameters

    If parameters are of the same type, we don't have to list the type twice, we can write

    func (firstname, lastname string) {
        // stuff
    }

    instead of 

    func (firstname string, lastname string) {

    }
*/

/*
    Functions is Go can return multiple values:

        func doSomething() (string, string) {

        }

    fmt.Sprint will print to a string rather than to the standard output. In other words, the output 
    of the function is a string. 


*/