package main

import "fmt"

func main() {
	c := make(chan int)

	go func() {
		c <- 1
		//close(c) // used if you're getting values off a channel with range
	}()

	fmt.Println(<-c)
}
