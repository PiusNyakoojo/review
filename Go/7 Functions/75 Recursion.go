/*
    A recursive function is a function that calls itself

    Functions are placed on the stack when they are called and popped off the stack when they have completed
    execution.

    A function expression that is recursive should be set with

        var myFunc func(params ...interface{}) bool;
        myFunc = function(params ...interface{}) bool {
            // do stuff

            return myFunc(params)
        }
*/

package main

import (
    "fmt"
)

func main() {
    a := fib(10)
}

func fib(n) {
    switch {
    case n < 0:
        return -1
    case n == 0, n == 1:
        return 1
    default:
        return fib(n - 1) + fib(n - 2)
    }
}