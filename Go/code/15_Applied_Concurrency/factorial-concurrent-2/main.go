package main

import (
	"fmt"
	"math/big"
	"time"
)

func main() {
	start := time.Now()
	c := factorial(500000)
	elapsed := time.Since(start)

	<-c
	// for n := range c {
	// 	n++
	// 	//fmt.Println(n)
	// }
	//fmt.Println(<-c)
	fmt.Printf("Elapsed time: %v", elapsed.String()) // 0s
}

func factorial(n uint64) chan *big.Int {
	out := make(chan *big.Int)
	go func() {
		result := new(big.Int).SetUint64(1)
		friend := new(big.Int).SetUint64(1)
		for i := n; i > 0; i-- {
			result = result.Mul(result, friend.SetUint64(i))
		}
		out <- result
		close(out)
	}()
	return out
}
