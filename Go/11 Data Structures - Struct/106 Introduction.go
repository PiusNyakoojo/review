/*
   Golang spec
       - A struct is a sequence of named elements, called fields, each of which has a name and a type.
       Field names may be specified explicitly (IdentifierList) or implicitly (AnonymousField). Within
       a struct, non-blank field names must be unique.
       - A field declared with a type but no explicit field name is an anonymous field, also called an
       embedded field or an embedding of the type in the struct. An embedded type must be specified as
       a type name T or as a pointer to a non-interface type name *T, and T itself may not be a pointer
       type. The unqualified type name acts as the field name.
       - Promoted

       When we create a type in go, that type has an underlying type. So if we make

        type foo int // foo is now an alias of int

       We can write

        var myAge foo
        myAge = 23
        fmt.Printf("%T %v \n", myAge, myAge)

        Generally speaking, you don't want to alias an int unless you want to attach a method to that type.

        In other OOP languages, you create instances of classes by instantiating the class and using that instance
        as an object that contains certain properties and methods defined from the class.

        In Go, you create a type and create variables of that type. So in the example below, p1 and p2 are
        of type person.

        A struct is an aggregate type which means you can aggregate together a bunch of other types.
*/
package main

import "fmt"

type person struct {
	first string
	last  string
	age   int
}

func main() {
	p1 := person{"James", "Bond", 20}
	p2 := person{"Miss", "Sugardaddy", 12}
	fmt.Println(p1.first, p1.last, p1.age)
	fmt.Println(p2.first, p2.last, p2.age)
}

/*
   Go is Object Oriented

   (1) Encapsulation
   state ("fields")
   behavior ("methods")
   exported / un-exported

   (2) Reusability
   inheritance ("embedded types")

   (3) Polymorphism
   interfaces

   (4) Overriding
   "promotion"
*/
/*
   In go, instead of saying properties, like in Java, we say fields. So the type person has 3 fields: first,
   last and age.

   In Go, we have types and we create values of that type. So p1 is of type person and has whatever value the
   person type provides when we initialize its fields

   Other languages: Classes
   Golang: Types

*/
