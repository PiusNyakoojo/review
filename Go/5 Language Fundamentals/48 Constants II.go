/*
    Go is a statically typed language that does not permist operations that mix numeric types. You 
    can't add a float64 to an int, or even an int32 to an int. Yet it is legal to write 1e6 * time.Second 
    or math.Exp(1) or even 1<<('\t' + 2.0).

    In Go, constants, unline variables, behave pretty much like regular numbers.

*/

/*
    Constants
        - A simple, unchaning value
        - A parallel type system
            - C / C++ has problems with a lack of strict typing
            - In Go, there is no mixing of numeric types
        - There are Typed and Untyped constants
            - const hello = "Hello, World!" // UNTYPED
            - const typedHello string = "Hello, World again..!" // TYPED
        - Untyped constant
            - A constant value that does not yet have a fixed type
                - a "kind"
                - not yet forced to obey the strict rules that prevent combining differently type values. 
        - It is this notion of an untyped constant that makes it possible for us to use constants in Go 
        with great freedom. 
        - This is useful, for instance
            - What is the type of 42?
                - int?
                - uint?
                - float64?
            - If we didn't have Untyped constants (constants of a kind), then we would have to do conversion
            on every literal value we used
                - and that would suck

*/

/*
    One way to think about untyped constants is that they live in a kind of ideal space of values, a space
    less restrictive than Go's full type system. But to do anything with them, we need to assign them to
    variables, and when that happens the variable (not the constant itself) needs a type, and the constant
    can tell the variable what type it should have.

*/