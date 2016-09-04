package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {

	in := bufio.NewReader(os.Stdin)

	fmt.Print("What's your name?: ")
	name, _, _ := in.ReadLine()
	fmt.Println("Welcome,", string(name), "!")

}
