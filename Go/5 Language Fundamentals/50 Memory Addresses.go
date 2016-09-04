/*
    Go to this link:
        https://goo.gl/PHKgO7

        Then click on "MEMORY IN COMPUTERS VIDEO"
*/

/*
    When you store something in the computer, you have RAM (Random Access Memory) where that information is 
    stored temoporarily for fast retrievals. 
*/

/*
    To print the memory address of a variable:

        a := 42
        fmt.Println("a's memory address: ", &a)
    
    Similar to how Println and Printf write to standard output, Scanf and Scanln read from standard input. 
*/

/*
    Scan
        - Scan scans text read from standard input, storing successive space-separated values into successive 
        arguments. Newlines count as space. It returns the number of items successfully scanned. If that is 
        less than the number of arguments, err will report why. 

    When scanning, we have to pass the memory address of the variable we want the result to be stored in. 
*/

package main

import "fmt"

func main() {
    var meters float64
    fmt.Print("Enter meters swam: ")
    fmt.Scan(&meters)
    yards := meters * metersToYards
    fmt.Println(meters, " meters is ", yards, " yards.")
}