package main

import "fmt"

func main() {
	n := 10
	c := make(chan int)
	done := make(chan bool)

	go func() {
		for i := 0; i < 20; i++ {
			c <- i
		}
		close(c)
	}()

	for i := 0; i < n; i++ {
		go func(i int) {
			for k := range c {
				fmt.Printf("%v: %v\n", i, k)
			}
			done <- true
		}(i)
	}

	for i := 0; i < n; i++ {
		<-done
	}
}
