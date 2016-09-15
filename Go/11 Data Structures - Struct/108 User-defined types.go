// package main

// import "fmt"

// var foo int

// func main() {
// 	var myAge foo
// 	myAge = 22
// 	fmt.Printf("%T %v \n", myAge, myAge) // main.foo 22
// }

/*
    If you want to prevent certain fields in a struct from being included in a json object we would use 

        `json:"-"`

    For example:

        type person struct {
            first string
            last string `json:"-"`
        }

    If we want to change the name of a field when a value is converted into json, we can say: 

        `json:"some other name"`

    For example:

        type person struct {
            first string
            age int `json:"wisdom score"`
        }

    These additional strings in the field are called "tags". Here are some additional examples of tags

    // datastore (app engine) tags:

    // A and B are renamed to a and b.
    // A, C and J are not indexed.
    // D's tag is equivalent to having no tag at all (E).
    // I is ignored entirely by the datastore.
    // J has tag information for both the datastore and json packages.

    type TaggedStruct struct {
        A int `datastore:"a,noindex"`
        B int `datastore:"b"`
        C int `datastore:",noindex"`
        D int `datastore:""`
        E int
        I int `datastore:"-"`
        J int `datastore:",noindex" json:"j"`
    }

    The underlying type of a person is a struct. A struct is a composite type or aggregate type because it is 
    composed of other types. Or it aggregates other types into this single type.
*/

/*
    Overriding
        - embedding types as fields in a struct
            - anonymous types
        - outer type and inner type
            - inner type is promoted to the outer type
        - syntactic sugar
        - overriding fields and methods
*/

/*
    Setting a receiver on a function allows us to attach that function to a type. So any receiver of that given type 
    can have this method called on them. These are also known as methods

    type person struct {
        first string
        last string
        age int
    }

    func (p person) fullName() string { // Any value of the type person can call this method
        return p.first + p.last
    }

    func main() {
        p1 := person{"John", "Doe", 12}

        fmt.Println(&p1) // &{John Doe 12}
        fmt.Printf("%T\n", &p1) // *main.person
        fmt.Println("Welcome,", p1.fullName()) // Welcome, John Doe
    }

    It's not idiomatic to use "this" or "self" in go. So don't write

        func (this person) fullName() string {
            return this.first + this.last
        }
*/