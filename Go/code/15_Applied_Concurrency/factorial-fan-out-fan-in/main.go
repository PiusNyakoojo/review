package main

import (
	"fmt"
	"sync"
)

func main() {
	num := 2 // number of go routines we run

	c := gen(3, 2, 4, 5, 2)
	b := make([]<-chan int, num)

	for i := 0; i < num; i++ {
		b = append(b, factorial(c))
	}

	for n := range fanIn(b) {
		fmt.Println(n)
	}
}

func fanIn(cs []<-chan int) <-chan int {
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

func gen(nums ...int) <-chan int {
	out := make(chan int)
	go func() {
		for _, n := range nums {
			out <- n
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
