/*
    When creating an initialized slice, there is an ending comma

    []int{1, 3, 5, 7, 9, 11,}

    greeting := []string{
        "Good morning!",
        "Bonjour",
        "Ni hao",
    }

    The size of the underlying array of the slice doubles up to a certain piont, and then they scale in 
    some smaller proportion.
*/


package main

import "fmt"

func main() {
    s := make([]int, 0, 5)

    fmt.Println("------------------")
    fmt.Println(s)
    fmt.Println("cap:", cap(s))
    fmt.Println("len:", len(s))    
    fmt.Println("------------------")

    for i := 0; i < 80; i++ {
        s = append(s, i)
        fmt.Println("val:", s[i], "len:", len(s), "cap:", cap(s))
    }
    
}

/*
    Deleting from a slice
        i := 2
        mySlice = append(mySlice[:i], mySlice[i+1:]...) // deletes i from the slice

*/

/*
    Exercise: Write a program that creates a slice of ints using shorthand notation then prints the slice. 

    s := make([]int, 5)
    fmt.Println(s)
*/