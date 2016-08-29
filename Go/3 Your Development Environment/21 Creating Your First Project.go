/*
    Your package name should correspond to your folder name. For example:

        main -
            |- main.go

    To learn more about how to name things in go,

        https://golang.org/ref/spec#Identifiers
        
        https://golang.org/doc/effective_go.html

    Package names should be good: short, concise, evocative. By convention, packages are given lower
    case, single-word names; there should be no need for underscores or mixedCaps. Err on the side
    of previty, since everyone using your package will be typing that name.

    Don't worry about collisions a priori. The package name is only the default name for imports; it
    need not be unique across all souce code, and in the rare case of a collision the importing can
    choose a different name to use locally. In any case, confusion is rare because the file name in
    the import determines just which package is being used.

    Another convention is that the package name is the base name of its source directory; the package
    in src/encoding/base64 is imported as "encoding/base64" but has name base64, not encoding_base64 and
    not encodingBase64.

    Remember: Long names don't automatically make things more readable. A helpful doc comment can
    often be more valuable than an extra long name.
*/

/*
    Every executable needs the main package and must use the main function. If we're creating a simple
    "hello world" program that we want to execute, we will be using the main package. Let's call the file

        main.go

    Since this will be the starting point of our execution
*/

package main

import "fmt"

func main {
    fmt.Println("Hello World")
}

/*
    Veriatic functions take in as many arguments as you want passed in.

    To format your code properly, use the go fmt command

        go fmt
*/

/*
    To run our go program we use the go run command

        go run <file-name>.go

        go run main.go

*/

/*
    To remote debug using VS Code, you must first run a headless Delve server on the target machine. For example:

        dlv debug --headless --listen=:2345 --log

*/

/*
    To run code, it must be part of the main package or else:

        go run: cannot run non-main package
*/