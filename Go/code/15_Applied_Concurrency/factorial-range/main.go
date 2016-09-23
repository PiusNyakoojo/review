package main

import "fmt"

type Result struct {
	fact  int
	index int
}

func main() {
	c := make(chan *Result)

	for i := 0; i < 10; i++ {
		go gofact(c, i)
	}

	for i := 0; i < 10; i++ {
		val := (<-c)
		fmt.Printf("Factorial with channel of %v: %v\n", val.index, val.fact)
	}
}

func gofact(c chan *Result, val int) {
	if val < 2 {
		c <- &Result{val, val}
	} else {
		result := 1
		for i := val; i > 0; i-- {
			result *= i
		}
		c <- &Result{result, val}
	}
}
