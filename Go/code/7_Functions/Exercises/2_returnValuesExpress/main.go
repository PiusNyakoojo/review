package main

import (
	"fmt"
)

func main() {

	half := func(n int) (int, bool) {
		return n / 2, n%2 == 0
	}

	a, b := half(6)

	fmt.Println("Value: ", a, " is even?: ", b)
}
