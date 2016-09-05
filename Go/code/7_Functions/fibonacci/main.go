package main

import "fmt"

func main() {
	fmt.Println("Fib: ", fib(1), fib(2), fib(3), fib(4), fib(5))
}

func fib(n int) int {
	switch {
	case n < 0:
		return -1
	case n == 0, n == 1:
		return 1
	default:
		return fib(n-1) + fib(n-2)
	}
}
