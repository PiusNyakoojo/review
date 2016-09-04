package main

import "fmt"

type Contact struct {
	greeting string
	name string
}

func main() {
	SwitchOnType(42)
	SwitchOnType("Pius")

	var contact Contact = Contact{"Nice to meet you, ", "Pius"}
	SwitchOnType(contact)
}

func SwitchOnType(x interface{}) {
	switch x.(type) {
		case int: 
			fmt.Println("int")
		case string: 
			fmt.Println("string")
		case Contact: 
			fmt.Println("Contact")
		default: 
			fmt.Println("Unknown type")
	}
}