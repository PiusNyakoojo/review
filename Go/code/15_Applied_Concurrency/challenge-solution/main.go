package main

import (
	"fmt"
	"math/rand"
)

func main() {
	c := gen(100)

	f := factorial(c)

	var i int
	for n := range f {
		fmt.Println(i, ": ", n)
		i++
	}
}

func gen(n int) chan int {
	out := make(chan int)

	go func() {
		for i := 0; i < n; i++ {
			out <- rand.Intn(10)
		}
		close(out)
	}()

	return out
}

func factorial(in chan int) chan int {
	out := make(chan int)

	go func() {
		for n := range in {
			out <- fact(n)
		}
		close(out)
	}()
	return out
}

func fact(n int) int {
	result := 1
	for i := n; i > 0; i-- {
		result *= i
	}
	return result
}
