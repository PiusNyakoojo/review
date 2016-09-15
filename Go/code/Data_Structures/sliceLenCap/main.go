package main

import "fmt"

func main() {
	s := []byte{'g', 'o', 'l', 'a', 'n', 'g'}

	t := s[:2]

	t = t[:cap(t)]

	t[3] = 'r'

	fmt.Println("len(t):", len(t), "cap(t):", cap(t))
	fmt.Println("s: ", string(s))
}
