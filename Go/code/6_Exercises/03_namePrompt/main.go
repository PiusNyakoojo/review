/*
   Create a program that prints to the terminal asking for a user to enter their name. Use fmt.Scan
   to read a user's name entered at the terminal. Print "Hello <NAME>" with <NAME> replaced by the
   user input from the terminal
*/

package main

import (
	"fmt"
)

func main() {
	var first, last string

	fmt.Print("Welcome, please enter your name: ")

	fmt.Scanln(&first, &last)

	fmt.Println("Hello", first, last)
}
