package main

import (
	"encoding/json"
	"fmt"
)

type person struct {
	First      string
	Last       string
	Age        int
	Profession profession
}

type profession struct {
	Title  string
	Salary float64
}

type lawyer struct {
	person
	First     string // Overrides First from person
	Last      string // Overrides Last from person
	lawSchool string
	Cases     []string // Title of cases
}

func main() {
	p1 := person{
		"John",
		"Doe",
		123,
		profession{
			"lawyer",
			123000.01,
		},
	}

	l1 := lawyer{
		p1,
		"Saul",
		"Goodman",
		"Harvard University",
		[]string{
			"kara vs idelman 2001",
			"loopy vs doopy 2006",
		},
	}

	fmt.Println("person: ", p1)
	fmt.Println("lawyer: ", l1)

	fmt.Println("lawyer first: ", l1.First)
	fmt.Println("lawyer last: ", l1.Last)
	fmt.Println("lawyer real first: ", l1.person.First)
	fmt.Println("lawyer real last: ", l1.person.Last)

	fmt.Println("--------------------")
	fmt.Println("JSON Marshaling:")
	bs, _ := json.Marshal(l1)
	fmt.Println(string(bs)) // John Doe are overriden so the output is:
	// {
	//     "Age": 123,
	//     "Profession": {
	//         // ...
	//     },
	//     "First": "Saul",
	//     "Last": "Goodman",
	//     "Cases": [
	//         // ...
	//     ]
	// }
	// Notice that lawSchool isn't shown since it's not exported
}
