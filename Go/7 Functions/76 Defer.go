/*
    defer
        - a keyword token in Go
        - defers (or calls) a function to right before its closest outer function exists
        - defer is often used to close a file that you opened.
*/

/*
    Program without defer

    func main() {
        world()
        hello()
    }

    func hello() {
        fmt.Println("Hello ")
    }

    func world() {
        fmt.Print("World")
    }

    // Ouput:
    // world
    // hello 
*/

/*
    Program with defer

    func main() {
        defer world()
        hello()
    }

    func hello() {
        fmt.Println("Hello ")
    }

    func world() {
        fmt.Print("World")
    }

    // Ouput:
    // world
    // hello 
*/