/*
    Incrementing a slice item
*/

package main

import (
    "fmt"
)

func main() {
    s := make([]int, 1)
    fmt.Println(s[0])
    s[0] = 8
    fmt.Println(s[0])
    s[0]++
    fmt.Println(s[0])    
}