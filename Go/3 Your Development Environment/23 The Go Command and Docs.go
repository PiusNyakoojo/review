/*
    https://golang.org/doc/cmd

    build
        - compile packages and dependencies
    clean
        - remove object files
    doc
        - show documentation for package or symbol
    env
        - print Go environment information
    fix
        - run go tool fix on packages
    fmt
        - run gofmt on package sources
    generate
        - generate Go files by processing source 
    get
        - download and install packages and dependencies
    install
        - compile and install packages and dependencies
    list
        - list packages
    run
        - compile and run go programs
*/

/*
    golang.org/x

        - these are tools that aren't included in the golang standard library but are being considered,
        or are officially supported by the golang team at google.
*/

/*
    To run an executable in the terminal: navigate to the path of the executable and run:

        ./<filename>.exe

        ./project1.exe

*/

/*
    go install
        - compiles and installs packages and dependencies and places them in bin if your GOBIN is setup
    
    go build
        - compiles and places the output in the same directory as the source file

*/

/*
    Once you install a package, it is accessible from the command line by just running the name of the 
    executable.

        project1

*/