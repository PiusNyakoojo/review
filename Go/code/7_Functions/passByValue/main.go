package main

import "fmt"

func main() {
	a := 10
	b := &a

	fmt.Printf("b's memory address: %p\n", b)

	check(b)
}

func check(n *int) {
	fmt.Printf("n's memory address: %p\n", n)
}
