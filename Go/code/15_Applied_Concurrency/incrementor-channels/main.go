package main

import "fmt"

var counter int

func main() {
	for n := range merge(incrementor("Fooooooo"), incrementor("Bar")) {
		counter++
		fmt.Println(n)
	}

	fmt.Println("Final: ", counter)
}

func merge(cs ...chan string) chan string {
	out := make(chan string)
	done := make(chan bool)

	for _, c := range cs {
		go func(ch chan string) {
			for n := range ch {
				out <- n
			}
			done <- true
		}(c)
	}

	go func() {
		for i := 0; i < len(cs); i++ {
			<-done
		}
		close(out)
	}()

	return out
}

func incrementor(s string) chan string {
	out := make(chan string)
	go func() {
		for i := 0; i < 10; i++ {
			out <- fmt.Sprintf("%v, printing: %v", s, i)
		}
		close(out)
	}()
	return out
}
