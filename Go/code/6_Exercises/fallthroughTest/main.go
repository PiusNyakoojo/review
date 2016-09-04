/*
   Testing if fallthrough has to be used at the end of the case or if it can be used somewhere else
   within the case's block
*/

package main

import "fmt"

func main() {
	name := "Jane"

	switch name {
	case "Jack": // will this move on if fallthrough isn't at the end? Nope!!! compiler warning 'fallthrough statement out of place'
		//fallthrough
		fmt.Println("Hey Jack")
	case "Jill":
		fmt.Println("Hey Jill")
	case "Jane": //
		fmt.Println("Hey Jane")
		fallthrough
	case "John":
		fmt.Println("Hey John")
	default:
		fmt.Println("Default")
	}
}
