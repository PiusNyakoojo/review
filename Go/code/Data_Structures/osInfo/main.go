package main

import (
	"fmt"
	"os"
)

func main() {
	goos := os.Getenv("GOPATH")

	fmt.Printf("The operating system is: %s \n", goos)

	//path := os.Getenv("PATH")

	//fmt.Printf("Path is : %s \n", path)
}
