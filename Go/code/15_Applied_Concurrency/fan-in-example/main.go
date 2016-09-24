package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	c := fanIn(boring("Joe"), boring("Anna"))
	for i := 0; i < 10; i++ {
		fmt.Println(<-c)
	}
	fmt.Println("Hey, I gotta go, talk to you later.")
}

func boring(msg string) <-chan string {
	out := make(chan string)
	go func() {
		for i := 0; ; i++ {
			out <- fmt.Sprintf("%s: %d", msg, i)
			time.Sleep(time.Duration(rand.Intn(1e3)) * time.Millisecond)
		}
	}()
	return out
}

// FAN IN
func fanIn(in1, in2 <-chan string) <-chan string {
	out := make(chan string)
	go func() {
		for {
			out <- <-in1
		}
	}()
	go func() {
		for {
			out <- <-in2
		}
	}()
	return out
}
