package main

import (
	"fmt"
)

func main() {
	n := average(43, 56, 87, 12, 45, 57) // each of these numbers is of type "kind" before their type is determined at runtime
	fmt.Println("n: ", n)
}

func average(values ...float64) float64 {

	var sum float64 // this is better than sum := 0.0 because the 0 value is set for us.

	/*
		for i := 0; i < len(values); i++ {
			sum += values[i]
		}
	*/

	for _, v := range values {
		sum += v
	}

	return sum / float64(len(values))
}
