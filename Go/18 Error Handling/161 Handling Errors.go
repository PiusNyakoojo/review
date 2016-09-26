/*  
    golang.org/builtin

    _, err := os.Open("no-file.txt")
    if err != nil {
        fmt.Println("err happened", err)
        // log.Println("err happened", err)
        // log.Fatalln(err)
        // panic(err)
    }

*/
/*
    Package log implements a simple logging package ... writes to standard error and prints the date and 
    time of each logged message ... the Fatal functions call os.Exit(1) after writing the log message ... 
    the Panic functions call panic after writing the log message.
*/
/*
    Println calls Output to print to the standard logger. Arguments are handled in the manner of 
    fmt.Println.

    Standard out and standard Error usually point to the console or terminal but we can actually direct 
    Standard error to point elsewhere. 
*/
/*
    func init() {}

    is run before "main" and you can have as many "init"'s as you'd like. They can be in different files 
    or packages. You'll usually declare init when you want to setup your environment before you run main. 

    Finally, each source file can define its own niladic init function to set up whatever state is required. 
    (Actually each file can have multiple init functions.) And finally means finally: 

        init is called after all the variable declarations in the package have evaluated their initializers, 
        and those are evaluated only after all the imported packages have been initialized.

        Besides initializations that cannot be expressed as declarations, a common use of init functions 
        is to verify or repair correctness of the program state before real execution begins. 

    func init() {
        if user == "" {
            log.Fatal("$USER not set")
        }
        if home == "" {
            home = "/home/" + user
        }
        if gopath == "" {
            gopath = home + "/go"
        }
        // gopath may be overridden by --gopath flag on command line.
        flag.StringVar(&gopath, "gopath", gopath, "override default GOPATH")
    }
*/
/*
    func init() {
        logFile, err := os.Create("log.txt")
        if err != nil {
            fmt.Println(err)
        }
        log.SetOutput(logFile) // sets the output destination for the standard logger. 
    }

    So now when we call log.Println("something"), that will be output to log.txt
*/
/*
    Fatalln is equivalent to Println + a call to os.Exit(1)

        Exit causes the current program to exit with the given status code. Conventially, code zero indicates
        success, non-zero an error. The program terminates immpediately; deferred functions are not run. 
*/
/*
    panic is useful if you want to see the stacktrace of the error. 

    func panic(v interface{})

    The panic built-in function stops normal execution of the current goroutine. When a function F calls 
    panic, normal execution of F stops immediately. Any functions whose execution was deferred by F are 
    run in the usual way, and then F returns to its caller. 

    To the caller G, the invocation of F then behaves like a call to panic, terminating G's execution 
    and running any deferred functions. This continues until all functions in the executing 
    goroutine have stopped, in reverse order. At that point, the program is terminated and the error 
    condition is reported, including the value of the argument to panic. This termination sequence 
    is called panicking and can be controlled by the built-in function revoer. 
*/