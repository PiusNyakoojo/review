package main

import (
	"encoding/json"
	"fmt"
)

type person struct {
	First       string
	Last        string
	Age         int
	notExported bool // not exported because lowercase
}

func (p person) greet() string {
	return "Hello, " + p.First
}

func main() {
	p1 := person{
		First: "John",
		Last:  "Doe",
		Age:   20,
	}

	data, _ := json.Marshal(p1)

	fmt.Println(p1.greet())
	fmt.Println(string(data))
}
