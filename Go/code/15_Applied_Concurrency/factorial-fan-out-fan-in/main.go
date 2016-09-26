package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	num := 2048 // number of go routines we run

	c := gen(100000) // pass number of calculations desired.
	var b = make([]<-chan int, num)

	for i := 0; i < num; i++ {
		b[i] = factorial(c)
	}

	start := time.Now()

	for n := range fanIn(b...) {
		//fmt.Println(n)
		_ = n
	}

	fmt.Printf("Time: %v \n", time.Since(start).Seconds())
}

func fanIn(cs ...<-chan int) <-chan int {
	out := make(chan int)
	var wg sync.WaitGroup

	wg.Add(len(cs))
	for _, c := range cs {
		go func(ch <-chan int) {
			for n := range ch {
				out <- n
			}
			wg.Done()
		}(c)
	}

	go func() {
		wg.Wait()
		close(out)
	}()

	return out
}

func gen(num int) <-chan int {
	out := make(chan int)
	go func() {
		for i := 0; i < num; i++ {
			out <- i % 10
		}
		close(out)
	}()
	return out
}

func factorial(in <-chan int) <-chan int {
	out := make(chan int)
	go func() {
		for n := range in {
			out <- fact(n)
		}
		close(out)
	}()
	return out
}

func fact(n int) int {
	total := 1
	for i := n; i > 1; i-- {
		total *= i
	}
	return total
}

// Results

// Goroutines   | Calculations  | average time (seconds)
//-----------------------------------------------
// 2            | 100,000       | 0.11 - 0.12
// 4            | 100,000       | 0.08 - 0.09
// 8            | 100,000       | 0.08 - 0.09
// 16           | 100,000       | 0.07 - 0.09
// 32           | 100,000       | 0.07 - 0.09
// 1024         | 100,000       | 0.09 - 0.11 ???? :O This is unexpected..
// 2048         | 100,000       | 0.10 - 0.11

/*
   The results above seem to suggest that there is an optimal number of goroutines to run on a particular
   number of tasks in order to achieve a minimal time to complete the task. Below or above this optimal value
   results in slower computation on average.

   This is interesting because it counteracts the commonly held notion that the more goroutines you throw
   at a task, the faster the task is to complete. Instead, this seems to suggest that you can throw a bunch
   of goroutines at a task but if you throw too many, your performance will degrade.
*/
