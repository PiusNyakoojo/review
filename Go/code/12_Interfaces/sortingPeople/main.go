package main

import (
	"fmt"
	"sort"
)

type people []string

type animal struct {
	name         string
	numberOfLegs int
}

type animals []animal

func (a animals) Len() int           { return len(a) }
func (a animals) Less(i, j int) bool { return a[i].numberOfLegs < a[j].numberOfLegs }
func (a animals) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }

var (
	studyGroup = people{"John", "Becky", "Al", "Steve", "Krabbs"}
	s          = []string{"Zeno", "John", "Albert", "Jenny"}
	n          = []int{5, 7, 3, 4, 95, 34, 53, 63, 12, 32, 21, 2, 3, 1, 36, 56}
	rndAnimals = animals{
		animal{
			"cat",
			4,
		},
		animal{
			"flamingo",
			2,
		},
		animal{
			"ostrich",
			2,
		},
		animal{
			"centipede",
			100,
		},
		animal{
			"millipede",
			1000,
		},
		animal{
			"disabled_dog",
			3,
		},
	}
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
	fmt.Println("----------------------------------")
	fmt.Println("Before:", rndAnimals)
	sort.Sort(rndAnimals)
	fmt.Println("After:", rndAnimals)
}
