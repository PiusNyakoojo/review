package main

import "fmt"

func main() {
	var m map[string]string

	//var s = m

	m["hello"] = "hello2"

	fmt.Println(m["hello"]) // what is the output?
}
