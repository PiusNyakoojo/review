/*
    Variadic Functions
        - Functions that can accept an arbitrary amount of arguments for a given parameter

    The final parameter in a function signature may have a type prefixed with ... 
    A function with such a parameter is called variadic and may be invoked with zero or more arguments 
    for that parameter.
*/

/*
    const number = 42 // of type "kind".. it's type is not yet determined

    Since they are of type "kind" we can assign them to a float or int without any conversion.. This is 
    a positive of the parallel constant type system because we don't need to specify the type of the 
    constants here.

    The variadic parameter is of type slice <whatever type>

    For example, if the type after the ... is float64, then the parameter is of type []float64. We'll learn
    about slices soon, but a slice is just a list. 

    We can use the keyword "range" to loop over a collection of something

        for _, v := range values { // range returns index, item_at_index or key, value depending on the collection
            fmt.Println("value: ", v)
        }
*/
/*
    Instead of having variadic functions, we can also have a datastructure as a parameter if we want to pass
    multiple values to a function, we'll look at that next.
*/