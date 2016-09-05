package main

import (
	"fmt"
	"os"
)

func main() {
	srcFile := "./subfile/src.txt"

	content := make([]byte, 2) // type uint8

	fmt.Println("Opening file: ", srcFile)
	src, err := os.Open(srcFile)
	if err != nil {
		panic(err)
	}
	defer src.Close()

	src.Read(content)

	fmt.Println("Content: ", string(content))
}
