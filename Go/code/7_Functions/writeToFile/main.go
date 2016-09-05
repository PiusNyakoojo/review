package main

import (
	"fmt"
	"os"
)

const (
	srcFile string = "src.txt"
	dstFile string = "dst.txt"
)

func main() {
	fmt.Println("Opening file: ", srcFile)

	src, err := os.Open(srcFile)
	if err != nil {
		panic(err)
	}
	defer src.Close()

	fmt.Println("Creating file: ", dstFile)
	dst, err := os.Create(dstFile)
	if err != nil {
		panic(err)
	}
	defer dst.Close()

	content := make([]byte, 200)
	src.Read(content)

	fmt.Println("Content: ", string(content))

	dst.Write(content)

}
