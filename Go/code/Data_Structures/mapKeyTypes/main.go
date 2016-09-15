package main

import (
	"fmt"
)

func main() {
	m := make(map[interface{}]interface{})

	m[1] = "hey 1"
	m["goodbye"] = 1234
	m[1.342] = []string{"something"}

	fmt.Printf("map: %v", m)
}
