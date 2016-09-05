package main

import (
	"fmt"
)

func main() {
	slice := []int{1, 2, 3, 4, 5}
	fmt.Printf("Main address: %p\n", &slice) // 0x1234
	modify(slice)
	fmt.Println("List: ", slice)             // [5 1 2 3 4 5]
	fmt.Printf("List address: %p\n", &slice) // 0x1234
}

func modify(l []int) {
	l[0] = 5
	fmt.Printf("Modify address: %p\n", &l) // 0x1223 ; different
}

/*
   The thing to note is that the addresses are different
*/
