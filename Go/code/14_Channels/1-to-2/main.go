package main

import "fmt"

func main() {
	c := make(chan int)
	done := make(chan bool)

	go func() {
		for i := 0; i < 20; i++ {
			c <- i
		}
		close(c)
	}()

	go func() {
		for n := range c {
			fmt.Println("1st-----:", n)
		}
		done <- true
	}()

	go func() {
		for n := range c {
			fmt.Println("2nd:", n)
		}
		done <- true
	}()

	<-done
	<-done
}
