package main

import (
	"fmt"
	"sort"
)

type people []string

var (
	studyGroup = people{"John", "Becky", "Al", "Steve", "Krabbs"}
	s          = []string{"Zeno", "John", "Albert", "Jenny"}
	n          = []int{5, 7, 3, 4, 95, 34, 53, 63, 12, 32, 21, 2, 3, 1, 36, 56}
)

func main() {
	fmt.Println("Before:", studyGroup)
	sort.Strings(studyGroup)
	fmt.Println("After:", studyGroup)
	fmt.Println("----------------------------------")
	fmt.Println("Before:", s)
	sort.Strings(s)
	fmt.Println("After:", s)
	fmt.Println("----------------------------------")
	fmt.Println("Before:", n)
	sort.Ints(n)
	fmt.Println("After:", n)
}
