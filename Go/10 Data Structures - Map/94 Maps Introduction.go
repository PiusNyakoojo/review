/*
    Maps are for key-value data structures.

        - key/value storage
        - a "dictionary"
        - a reference type
            - a map is a pointer to an underlying data structure where the data is actually stored.
        - built on top of a hashtable
            - a hashtable is the underlying data strcture of a map
        - an unordered group of elements of one type, called the element type
            - indexed by a set of unique keys of another type, called the key type. 
            - The value of an uninitialized map is nil. 
    
    Examples
        - creating maps
            - make
                var m = make(map[<keytype>]<valuetype>)
            - shorthand
                m := make(map[<keytype>]<valuetype>)
        - adding entries
        - updating entries
        - deleting entries

    Documentation
        - golang spec
        - effective go
        - github golang
*/

/*
    // Declares a variable myGreeting of type map[string]string and has
    // value nil which is the zero value of a map.
    var myGreeting map[string]string // shouldn't create a map in this way
    
    // Declares a variable myGreeting that is initialized as a map[string]string and is empty.
    // This can be done both outside of a func and within a func.
    var myGreeting = make(map[string]string) // this works

    // Declares a variable called myGreeting using the shorthand notation. The map is empty. 
    // This can only be done within a func (not outside of a func)
    myGreeting := make(map[string]string) // this works

    // Declares a variable called myGreeting using the shorthand notation. The map is empty and 
    // isn't initialized with anything. This can only be done within a func (not outside of a func)
    myGreeting := map[string]string{} // this works

    To delete an element from a map

        delete(m, <key>)

        delete(m, "hello")

    To get the length of a map : 

        len(m)
*/
/*
    The optional second return value when getting a value from a map indicates if the key was present 
    in the map. This can be used to disambiguate between missing keys and keys with zero values like 
    `0` or `""`. Here we didn't need the value itself, so we ignored it with the _blank identifier_
    `_`

    _, ok := m["item2"]
    fmt.Println("ok:", ok) // this tells us if "item2" is in the map m 

*/

/*
    We can also declare and initialize a new map in the same line with this syntax: 

    n := map[string]int{"foo": 1, "bar": 2} // notice that we leave out make().. this is called composite literal
    fmt.Println("map:", n)

*/

/*
    Example:

    m := map[string]string{
        "greeting1": "Hello World",
        "greeting2": "What's up people",
        "greeting3": "Boom shaka laka!",
    }

    Map assignment is a statement, not an expression.. it doesn't return anything..

    m["greeting4"] = 3 // this doesn't return anything.. 

    // on the other hand, slice assignment is an expression.. it returns something.. 

    s := []string{}

    s = append(s, "hello") // this returns a slice 

    When creating a variable by assigning it to another variable's value, use 

        var myVar = otherVar

    OR 

        myVar := otherVar
*/

/*
    if val, exists := m["hello"]; exists {
        // do something 
    } else {
         
    }
*/

/*
    A map is an unordered group of elements of one type, called the element type, indexed by a set of unique keys 
    of another type, called the key type. The value of an uninitialized map is nil. 

    MapType = "map" "[" KeyType "]" Element Type .
    KeyType Type .

    The comparison operators == and != must be fully defined for operands of the key type; thus the key type must 
    not be a function, map, or slice. If the key type is an interface type, these coparison operators must be 
    defined for the dynamic key values; failure will cause a run-time panic.

    Creating a map with make() takes a map type with an optional argument of capacity hint if you suspect your map 
    will not exceed a certain capacity.

    Sometimes we need to distinguish between whether an entry in a map is the zero value or if it's actually in the 
    map or not. we can use the "comma ok" idiom to fetch whether or not a key-value pair exists in the map with 

        value, exists := map[someKey]

        val, ok := map[someKey] // this is the idiomatic way of writing the above code.. "comma ok" idiom. 
*/