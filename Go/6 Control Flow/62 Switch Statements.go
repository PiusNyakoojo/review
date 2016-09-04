/*
    Switch / case / default

    func main() {
        name := "Pius"

        switch name {
            case "Pius":
                fmt.Println("Welcome Pius! Ready to play?")
            case "John":
                fmt.Println("Hey John, want to get started?")
            case "Jane":
                fmt.Println("Hey there Jane, are you ready?")
            default:
                fmt.Println("Welcome to Enoplay! Looking for someone to play a game with?!")
        }
    }
*/

/*
    No default fallthrough (which will continue to run other cases after a case that is satisfied)
    fallthrough is optional.

    You can specify fallthrough by explicitly stating it. 
    Break isn't needed like in other languages because by default there is not fallthrough!!

    To use fallthrough:

    switch name {
        case "Pius":
            fmt.Println("Hey Pius")
        case "John":
            fmt.Println("Hey John")
            fallthrough // this will make the program go to the next case after running this case
        case "Jane":
            fmt.Println("Hey Jane")
            fallthrough // this will make the next case run if this case is satisfied as well
        case "Junior":
            fmt.Println("Hey Junior")
        case "Senior":
            fmt.Println("Hey Senior")
            fallthrough
        default:
            fmt.Println("Hey!!")
    }

    If "Pius" is the case, the output will be:

        Hey Pius
    
    So if "John" is satisfied, the output will be:

        Hey John
        Hey Jane
        Hey Junior

    If Jane is satisfied, the output will be:

        Hey Jane
        Hey Junior

    If Junior is satisfied, the output will be:

        Hey Junior

    If Senior is satisfied, the output will be:

        Hey Senior
        // notice that the default is not executed even if we use fallthrough

    If blahblahblah is the case, then the output will be:

        Hey!!
*/
/*
    In Go, we can also switch on multiple cases:

        switch name {
            case "Pius", "Jameson", "Roger":
                fmt.Println("Hey Guys")
            case "Jenny", "Julie", "Janet":
                fmt.Println("Hey Gals")
            default:
                fmt.Println("Hey person or alien or extradimensional entity")
        }

*/

/*
    We can also switch without an expression:
        - This will look at every case and run whichever one is true first. If none of them are true, it will run 
        the default case.

    myFriendsName := "Roger"

    switch {
        case len(myFriendsName) == 2:
            fmt.Println("Hey friend with name length of 2!")
        case len(myFriendsName) == 3:
            fmt.Println("Hey friend with name length of 3!")
        case len(myFriendsName) == 4:
            fmt.Println("Hey friend with name length of 4!")
        case len(myFriendsName) == 5:
            fmt.Println("Hey friend with name length of 5!")
        case len(myFriendsName) == 6:
            fmt.Println("Hey friend with name length of 6!")
        default:
            fmt.Println("Ugh, yo.. you have a long name!!")
    }
*/
/*
    Switch on types
        - Normally we switch on value of variable
        - Go allows you to switch on type of variable

    type Contact struct {
        greeting string
        name string
    }

    // we'll learn more about interfaces later
    func SwitchOnType(x interface{}) {
        switch x.(type) { // this is an assert; asserting, "x is of this type"
            case int:
                fmt.Println("int")
            case string:
                fmt.Println("string")
            case Contact:
                fmt.Println("contact")
            default:
                fmt.Println("Unknown type")
        }
    }

    func main() {
        SwitchOnType(42)
        SwitchOnType("Pius")

        var contact = Contact{"Good to meet you, ", "Pius"}
        
        SwitchOnType(contact)
    }

*/

/*
    interface{} means it can be of any type.

*/