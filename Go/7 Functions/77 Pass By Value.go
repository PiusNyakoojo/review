/*
    When you pass an argument to a function, that argument's value is passed, rather than its reference. 

    Passing a pointer to a function only passes the value of the address location to the function. It doesn't 
    pass a reference to that pointer. The VALUE of that pointer is passed.

    (personal notes: I think designing the language in this way helps avoid complicated pointer things that
    could happen in C.. i'll try to find an example)
*/
/*
    m := make(map[string]int) // creates a map with string keys and int values

    Allocation with make 
    Back to allocation. The built-in function make(T, args)
    serves a purpose different from new(T). It creates slices, maps, and channels only, and it returns
    an initialized (not zeroed) value of type T (not *T). The reason for the distinction is that these
    three types represent, unde the covers, references to data structure that must be initialized before
    use.
    
    A slice, for example, is a three-item descriptor containing a pointer to the data (inside an array),
    the length, and the capacity, and until those items are initialized, the slice is nil. For slices, maps,
    and channels, make initializes the internal data structure and prepares the value for use. For instance

        make([]int, 10, 100)

    allocates an array of 100 ints and then creates a slice structure with length 10 and a capacity of 100 
    pointing at the first 10 elements of the array.

*/

/*
    When you pass a slice, map or channel, you don't want to pass a reference to that data because it's 
    already a reference to the data it contains. Internally, this data is maintained and the resulting
    type is itself a reference
*/