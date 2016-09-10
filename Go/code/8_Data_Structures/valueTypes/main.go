package main

import "fmt"

func main() {
	value1 := 1 // value type

	var value2 = value1 // a copy of value1 is made and new memory is allocated for value2.

	slice1 := []string{"whatever"} // reference type

	var slice2 = slice1 // slice2 now references the same data as slice1.

	fmt.Printf("value1 address: %p \nvalue2 address: %p\n", &value1, &value2)

	fmt.Printf("slice1 address: %p \nslice2 address: %p\n", slice1, slice2)
}
