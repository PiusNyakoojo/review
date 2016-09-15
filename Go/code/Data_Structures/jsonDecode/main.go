package main

import (
	"encoding/json"
	"fmt"
	"strings"
)

type person struct {
	First       string
	Last        string
	Age         int `json:"wisdom score"`
	notExported int
}

func main() {
	var p1 person
	rdr := strings.NewReader(`{"First":"John", "Last":"Doe", "wisdom score": 22}`) // Create a reader
	json.NewDecoder(rdr).Decode(&p1)

	fmt.Println(p1.First)
	fmt.Println(p1.Last)
	fmt.Println(p1.Age)
}
