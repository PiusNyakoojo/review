package main

import (
	"fmt"
)

func main() {
	var large, small int
	fmt.Print("Please enter large number:")
	fmt.Scan(&large)
	fmt.Print("\n")
	fmt.Print("Please enter a small number:")
	fmt.Scan(&small)
	fmt.Print("\n")

	fmt.Printf("Here's the remainder of %v and %v: %v", large, small, large%small)

}
