package main

import (
	"encoding/json"
	"fmt"
)

type person struct {
	First    string
	Last     string
	Age      string
	blahblah int // not exported
}

func main() {
	var player person

	bs := []byte(`{"First":"Jack", "Last":"Frost"}`)

	json.Unmarshal(bs, &player)

	fmt.Println("----------")
	fmt.Println(player.First)
	fmt.Println(player.Last)
	fmt.Println(player.Age)
	fmt.Printf("%T \n", player)
}
