package main

import (
	"fmt"
	"math/rand"
)

func main() {
	n := 100

	for i := 0; i < n; i++ {
		go func() {
			print(factorial(gen(10)))
		}()
	}
}

func gen(n int) chan int { // inefficient to create 100 channels!!! look at challenge-solution
	out := make(chan int)
	go func() {
		out <- rand.Intn(n)
	}()
	return out
}

func factorial(in chan int) chan int {
	out := make(chan int)
	go func() {
		total := 1
		for i := <-in; i > 0; i-- {
			total *= i
		}
		out <- total
		close(out)
	}()
	return out
}

func print(in chan int) {
	for n := range in {
		fmt.Println(n)
	}
}
