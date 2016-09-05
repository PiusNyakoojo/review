/*
    Callback
        - passing a func as an argument

    When writing Go programs, err on the side of clarity and readability over cleverness.. functional programming
    is possible in Go, but it's not always the clearest, cleanest solution.
*/

/*
    Example:
*/
package main

import "fmt"

func filter(l []int, f func(int) bool) []int {
    xs := []int{}
    for _, n := range l {
        if f(n) {
            xs = append(xs, n)
        }
    }
    return xs
}

func main() {
    xs := filter([]int{1, 2, 3, 4}, func(n int) bool {
        return n % 2 == 0
    })
    fmt.Println(xs) // [2 4]
}