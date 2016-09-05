/*
    Data Structures are just ways of storing information. It's a huge sub-field of computer science to determine
    how we should store data for fast lookup times or to process things quickly and efficiently.

    There are a bunch of fundamental data structures

    Array
        - a numbered sequence of elements of a single type
        - do not change in size (not dynamic)
        - The number of elements is called the length and is never negative.
        - The length is part of the array's type; it must evaluate to a non-negative constant 
        representable by a value of type int.
        - Array types are always one-dimensional but may be composed to form multi-dimensional types.
        - We usually use slices if we want dynamic size changing
        - https://golang.org/ref/spec#Array_types
    
    Slice
        - A list
        - A slice is a descriptor for a contiguous segment of an underlying array and provides access to 
        a numbered sequence of elements from that array. A slice type denotes the set of all slices of arrays 
        of its elements. The value of an uninitialized slice is nil. 
        - change size
        - have a length and a capacity
        - https://golang.org/ref/spec#Slice_types

    map
        - Key / value storage
        - A "dictionary"
        - A map is an unordered group of elements of one type, called the element type, indexed by a set 
        of unique keys of another type, called the key type. The value of an uninitialized map is nil. 
        - https://golang.org/ref/spec#Map_types
    
    struct 
        - A data structure 
        - A composite type 
        - Allows us to collect properties together
        - https://golang.org/ref/spec#Struct_types
*/

/*
    How to declare an array: 

        var arr [some_number]<some_type>

        var arr [10]string // an array of length 10 that holds strings

    How to declare a slice:

        var slice []<some_type>

        var slice []float64 // a slice of float64. Recall that a slice is a reference type that holds a reference
                            // to an underlying datastructure, an array, a length value and a capacity. 

    As you can see, the difference between declaring an array and declaring a slice is that an array must be 
    declared with a number!! The size of the array can't change after its been created.

    A byte is an alias for uint8 
*/

/*
    Go's arrays are values. An array variable denotes the entire array; it is not a pointer to the first 
    array element (as would be the case in C). This means that when you assign or pass around an array value
    you will make a copy of its contents. (To avoid the copy you could pass a pointer to the array, but 
    then that's a pointer to an array, not an array.) One way to think about arrays is as a sort of struct 
    with indexed rather than named fields: a fixed-size composite value. 

    An array literal can be specified like so:

    b := [2]string{"Penn", "Teller"}

    Or, you can have the compiler count the array elements for you:

    b := [...]string{"Penn", "Teller"}

    In both cases, the type of b is [2]string
*/