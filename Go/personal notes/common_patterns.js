/*
    When creating a value of a certain struct type (e.g. creating an instance of 
    a struct).. we can use the 
*/

type Type struct{
    property string `json:"property"`
}

func NewType() *Type {
    return &Type{
        property: "whatever"
    }
}

/*
    This is nice because you can also set options when creating a value of this type 
*/


// NewType creates a new Type. 
func NewType(options interface{}) *Type { // function 

}

/*
    We can then use interfaces to do certain things with a given instance 
*/

// Destroy destroys the Type. If the Type has children, 
// Destroy calls Destroy on those as well.
func (t *Type) Destroy() { // method
    // do something
}

/*
    Have option structs if you plan to have a resuable structure that contains options 
*/

type TypeOptions struct {
    isCool string `json:""`
}

/*
    The caller of an object that requires closing has the responsibility of closing that object. 

    For example:
*/

file, err := os.File("whatever.html")
defer file.Close() // defer is called anytime the function exits. The end of a function isn't necessarily when it exits (e.g. in a panic)