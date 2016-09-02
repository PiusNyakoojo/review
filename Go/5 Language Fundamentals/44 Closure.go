/*
    Anonymous function
        - a function without a name.
    
    Function expression
        - Assigning a func to a variable
*/
package main

import "fmt"

func main() {
    x := 0

    increment := func() int {
        x++
        return x
    }

    fmt.Println(increment());
    fmt.Println(increment());    
}

/*
    Golang has first-class functions like javascript :D
*/

func wrapper() func() int {
    x := 0

    return func() int {
        x++
        return x
    }
}

func main() {
    increment := wrapper()

    fmt.Println(increment()) // 1
    fmt.Println(increment()) // 2
}