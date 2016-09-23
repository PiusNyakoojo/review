package main

import (
	"fmt"
	"time"
)

func main() {
	c := make(chan int, 4)

	go func() {
		for i := 0; i < 10; i++ {
			time.Sleep(time.Second)
			c <- i
			fmt.Printf("length: %v \n", len(c))
		}
	}()

	go func() {
		for {
			v := <-c
			fmt.Printf("%v, %T \n", v, v)
		}
	}()

	time.Sleep(20 * time.Second)
}
