package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func main() {
	wg.Add(2)
	go func() {
		for i := 0; i < 10; i++ {
			time.Sleep(time.Duration(10 * time.Second))
			fmt.Println(i, ": I LOVE MY JOB!")
		}
		wg.Done()
	}()

	go func() {
		for i := 0; i < 10; i++ {
			time.Sleep(time.Duration(3 * time.Second))
			fmt.Println(i, ":me too!")
		}
		wg.Done()
	}()

	wg.Wait()
}

/*
   This is a test to see how concurrency handles sleep. Does it switch between the composed goroutines and
   preserve the time they're waiting? Does time spent on other goroutines impact the time total time spent
   on this one?

   What happens when time.Sleep is called. When the context switching between goroutines happens, how does
   Go behave? How will this context switching behave the execution of time.Sleep.
*/
