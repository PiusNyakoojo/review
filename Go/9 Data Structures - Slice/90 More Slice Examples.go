/*
    Storing records of students
*/

package main

import (
    "fmt"
)

func main() {
    records := make([][]string, 0)

    // student1
    student1 := make([]string, 4)
    student1[0] = "Foster"
    student1[1] = "Nathan"
    student1[2] = "100.00"
    student1[3] = "74.00"

    records = append(records, student1)

    // student2
    student2 := make([]string, 4)
    student2[0] = "Gomez"
    student2[1] = "Lisa"
    student2[2] = "92.00"
    student2[3] = "96.00" 

    records = append(records, student2)
    
    fmt.Println(records)
}

/*

    A slice is a reference type. That means they are referencing some underlying datastructure. If you 
    look at what a slice is made up of, it has a header. There are 3 parts of that header: 

        - an address pointing to that underlying datastructure.
        - length
        - capacity
    
    For slices, maps and channels, we have to use make() to initialize the variable. 
    Shorthand way of making a slice

        s := []string{} // s == []string{}, s != nil

    Var way of making a slice

        var s []string // s == nil
    
    Using make() to make a slice

        s := make([]string, 10) // s == []string{} // this is the main way of making a slice 

*/