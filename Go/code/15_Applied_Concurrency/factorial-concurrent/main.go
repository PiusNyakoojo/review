package main

import (
	"fmt"
	"math/big"
	"time"
)

func main() {
	start := time.Now()
	f := factorial(5000)
	elapsed := time.Since(start)

	fmt.Println(f)
	fmt.Printf("Elapsed time: %v", elapsed.String()) // min: 10ms, max: 19ms
}

// My original solution. Note that this is slower than the non-concurrent factorial version because we're doing
// a lot of reads and writes from the channel. Factorial-concurrent-2 is faster because we do a since read
// from the channel and a single write to the channel
func factorial(n uint64) *big.Int {
	result := new(big.Int).SetUint64(1)
	friend := new(big.Int).SetUint64(1)
	c := make(chan uint64)

	go func(n uint64) {
		for i := n; i > 0; i-- {
			c <- i
		}
		close(c)
	}(n)

	for x := range c {
		result = result.Mul(result, friend.SetUint64(x))
	}

	return result
}
