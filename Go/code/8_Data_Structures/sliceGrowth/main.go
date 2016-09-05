package main

import "fmt"

func main() {
	s := make([]int, 0, 5)

	fmt.Println("------------------")
	fmt.Println(s)
	fmt.Println("cap:", cap(s))
	fmt.Println("len:", len(s))
	fmt.Println("------------------")

	for i := 0; i < 80; i++ {
		s = append(s, i)
		fmt.Println("val:", s[i], "len:", len(s), "cap:", cap(s))
	}

}
