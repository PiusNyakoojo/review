/*
    Method Sets
        - The set of methods attached to a type.
        - A type may have a method set associated with it. The method set of an interface type is its interface. 
        - The method set of any other type T consists of all methods declared with receiver type T.
        - The method set of the corresponding pointer type *T is the set of all methods declared with receiver 
        *T or T (that is, it also contains the method set of T). Further rules apply to structs containing 
        anonymous fields, as described in the section on struct types. Any other type has an empty method set.
        In a method set, each method must have a unique non-blank method name. 

    Receivers
        - value receiver
            - Attaches to both the value and pointer value of a value of the receiver type. 
            - value type
            - pointer type
        - pointer receiver
            - Only attaches the method to a pointer value, not a composite value. 
            - pointer type
    Examples
    Documentation
*/

/*
    Recall that an UNTYPED contant is a constant that does not yet have a fixed type. Also known as a "kind". 

        const hello = "Hello World!" // UNTYPED

        const goodbye string = "Goodbye World!" // TYPED

    It is this notion of untyped constant that makes it possible for us to use contants in Go with great 
    freedom. For instance, what is the type of 42? 
        - int?
        - uint?
        - float64?
    
    If we didn't have UNTYPED constants (constants of a kind), then we would have to do conversion on every literal
    value we used. And that would suck. The type of the constant is unknown until the program uses it and figures
    out what it should be at runtime.

*/