/*
    Pointers
        - A pointer is a variable type that stores the memory address of another variable
*/

package main

import (
    "fmt"
)

func main() {
    a := 42 

    fmt.Println(a) // 42
    fmt.Println(&a) // 0x20818a220

    var b *int = &a // b is of type int pointer

    fmt.Println(b) // 0x20818a220
    fmt.Println(*b) // 42, * is an now used as an operator to dereference the pointer.

    *b = 41 // change the value at the memory address of b
    fmt.Println(a) // 41
}

/*
    The above code makes b a pointer to the memory address where an int is stored. b is of type "int pointer"

    *int -- the * is part of the type -- b is of type *int

    A pointer to an int is a reference to a memory address where an int is stored.
*/

/*
    This is useful. We can pass a memory address instead of a bunch of values (we can pass a reference). and 
    then we can still change the value of whatever is stored at that memory address. This makes our program 
    more performant. We don't have to pass around large amounts of data. We only have to pass around addresses.

    Everything is PASS BY VALUE in Go, btw. When we pass a memory address, we are passing a value. 
*/