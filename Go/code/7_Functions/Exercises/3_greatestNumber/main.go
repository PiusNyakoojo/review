package main

import "fmt"

func main() {

	m := greatest(1, 3, 4, 734, 21, 432, 54, 31, 4212)

	n := greatest([]float64{322, 12, 321, 43, 123, 12, 76}...)

	fmt.Println("Max 1: ", m)
	fmt.Println("Max 2: ", n)
}

func greatest(values ...float64) float64 {

	var max float64

	for _, v := range values {
		if v > max {
			max = v
		}
	}

	return max
}
