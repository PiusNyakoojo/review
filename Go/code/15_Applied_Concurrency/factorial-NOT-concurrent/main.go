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
	fmt.Printf("Elapsed time: %v", elapsed.String()) // min: 3ms, max: 8ms
}

func factorial(n uint64) *big.Int {
	result := new(big.Int).SetUint64(1)
	friend := new(big.Int).SetUint64(1)
	for i := n; i > 0; i-- {
		result = result.Mul(result, friend.SetUint64(i))
	}
	return result
}
