/*
    Slice 
        - A slice is a descriptor for a continuous segment of an underlying array and provides access 
        to a numbered sequence of elements from that array. 
        - The value of an uninitialized slice is nil. 
            - It is a reference type 
        - Like arrays, slices are indexable and have a length. 
        - The length of a slice s can be discovered by the built-in function len;
            - Unline arrays, slices are dynamic
                - Their length may change during execution. 
        - The elements can be addressed by integer indices 0 through len(s) - 1
        - A slice, once initialized, is always associated with an underlying array that holds its elements. 
            - It is a reference type
        - The array underlying a slice may extend past the end of the slice. 
            - Capacity is a measure of that extent:
                - It is the sum of the length of the slice and the length of the array beyond the slice; 
            - The capacity of a slice can be discovered using the built-in function cap(a)
        - make 
            - A new, initialized slice value for a given telement type T is made using the built-in function 
            make, which takes a slice type and parameters specifying the length and optionally the capacity. 
            - A slice created with make always allocates a new, hidden array which the returned slice value 
            references. 
                - make([]T, length, capacity)
                - make([]int, 50, 100)
                    - same as this: new([100]int)[0:50]
        - Like arrays, slices are always one-dimensional but may be composed to construct higher-dimensional
        objects (multi-dimensional slices)

        (An array's length is part of its type fmt.Printf("%T", [10]int) // [10]int)
*/
/*
    You can do "slicing" on a string because a string is a slice of bytes. Remember: 
        - A string is made up of runes. 
        - A rune is a unicode code point. 
        - A unicode code point is 1 to 4 bytes. 
    Strings are made up of runes, runes are made up of bytes, so strings are made up of bytes. A string
    is a bunch of bytes; a slice of bytes. Recall that a rune is an alias for int32.. 32 bits == 4 bytes. 
    UTF-8 is a 4 byte encoding scheme. 

    Capacity = len(slice) + len(array_beyond_the_slice)

    Capacity is the length of the underlying array. Length is the numbers of elements that you want to index
    in your slice. The capacity will grow if your length exceeds it.

    So the following are equivalent ways of making a slice: 

    make([]int, 50, 100) // slice with length 50 and capacity 100
    new([100]int)[0:50] // slice the array and reference only the first 50 elements
*/
/*
    A slice literal is declared just like an array literal, except you leave out the element count:

    letters := []string{"a", "b", "c", "d"}

    A slice can be created with the built-in function called make, which has the signature,

    func make([]T, len, cap) []T 

    where T stands for the element type of the slice to be created. The make function takes a type, a length, 
    and an optional capacity. When called, make allocates an array and returns a slice that refers to that 
    array. 

    var s []byte
    s = make([]byte, 5, 5)
    // s == []byte{0, 0, 0, 0, 0}

    When the capacity argument is omitted, it defaults to the specified length. Here's a more succinct 
    version of the same code: 

    s := make([]byte, 5)

    The zero value of a slice is nil. len and cap will both return 0 for a nil slice 
*/
/*
    A slice can also be formed by "slicing" an existing slice or array. Slicing is done by specifying
    a half-open range with two indices separated by a colon. For example, the expression b[1:4] creates
    a slice including elements 1 through 3 of b (the indices of the resulting slice will be 0 through 2). 

    b := []byte{'g', 'o', 'l', 'a', 'n', 'g'}
    // b[1:4] == []byte{'o', 'l', 'a'}, sharing the same stored as b

    The start and end indices of a slice expression are optional; they default to zero and the slice's 
    length repectively: 

    // b[:2] == []byte{'g', 'o'}
    // b[2:] == []byte{'l', 'a', 'n', 'g'}
    // b[:] == b

    This is also the syntax to create a slice given an array: 

    x := [3]string{"Hello", "world"}
    s := x[:] // a slice referencing the storage of x
*/

/*
    Slicing does not copy the slice's data. It creates a new slice value that points to the original array. 
    This makes slice operations as efficient as manipulating array indices. Therefore, modifying the elements
    (not the slice itself) of a re-slice modifies the elements of the original slice: 

    d := []byte{'r', 'o', 'a', 'd'}
    e := d[2:]
    // e == []byte{'a', 'd'}
    e[1] = 'm'
    // e == []byte{'a', 'm'}
    // d == []byte{'r', 'o', 'a', 'm'}

    The length of a slice can be smaller than the capacity, but can never exceed the capacity of that slice. 

    To increase the capacity of a slice one must create a new, larger slice and copy the contents of the 
    original slice into it. This technique is how dynamic array implementations from other languages work
    behind the scenes. The next example doubles the capacity of s by making a new slice, t, copying the 
    contents of s into t, and then assigning the slice value t to s. 

    t := make([]byte, len(s), (cap(s) + 1)*2) // +1 in case cap(s) == 0
    for i := range s {
        t[i] = s[i]
    }
    s = t

    Golang has a built in copy function called: copy
*/

/*
    Go has a built-in append function that's good for most purposes; it has the signature

    func append(s []T, x ...T) []T 

    The append function appends the elements x to the end of the slice s, and grows the slice if a 
    greater capacity is needed.

    a := make([]int, 1)
    // a == []int{0}
    a = append(a, 1, 2, 3)
    // a == []int{0, 1, 2, 3}

    To append one slice to another, use ... to expand the second argument to a list of arguments. 

    a := []string{"John", "Paul"}
    b := []string{"George", "Ringo", "Pete"}
    a = append(a, b...) // equivalent to "append(a, b[0], b[1], b[2])"
    // a == []string{"John", "Paul", "George", "Ringo", "Pete"}
*/