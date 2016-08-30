/*
    There are 2 primary ways you should declare variables in Go.package 5 Language Fundamentals
    
    
    Variables 
        - shorthand
            - a := 10
            - can only be used inside func 
        - var 
            - zero value
            - we don't have default values in Go, we have zero values. That means that every single type 
            has a zero value. So if you don't explicitly assign or initialize a value to a type, it will 
            automatically (if you use var), give it a zero value.
            - For int and float, the zero value is 0
            - For a string it is ""
            - For a bool it is false
            - A lot of other things are just nil
        - type format verb 
            - %T 
            - This is useful to use in conjunction with Printf (format printing)
        - not preferred methods 
        - declare, assign, initialize

    
*/

package main

import "fmt"

func main() {
    a := 10
    b := "golang"
    c := 1.7 
    d := true

    fmt.Printf("%v", a)
    fmt.Printf("%v", b)
    fmt.Printf("%v", c)
    fmt.Printf("%v", d)
    
}