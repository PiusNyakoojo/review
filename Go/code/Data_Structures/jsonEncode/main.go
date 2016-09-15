package main

import (
	"encoding/json"
	"os"
)

type person struct {
	First       string
	Last        string
	Age         int
	notExported int
}

func main() {
	p1 := person{
		"James",
		"Bond",
		20,
		007,
	}

	// Create a new json encoder with the stardard console writer. Encode the struct data we want to write
	// to the the console.
	json.NewEncoder(os.Stdout).Encode(p1)
}
