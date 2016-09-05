package main

import (
	"fmt"
)

func main() {

	a, b := half(6)

	fmt.Println("Value: ", a, " is even?: ", b)
}

func half(n int) (int, bool) {
	return n / 2, n%2 == 0
}
