package main

import (
	"fmt"
	"sync"
	"sync/atomic"
	"time"
)

var mu sync.Mutex

func main() {
	c := make(chan int32)
	i := int32(10)
	j := int32(20)
	var p, q int32

	go func() {
		mu.Lock()
		c <- 231
		c <- i
		c <- j
		mu.Lock()
	}()

	go func() {
		atomic.StoreInt32(&p, <-c)
	}()

	go func() {
		atomic.StoreInt32(&q, <-c)
	}()

	time.Sleep(time.Second)
	fmt.Println(p)
	fmt.Println(q)
}
