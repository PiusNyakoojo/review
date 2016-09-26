/*
    FAQ:

    Why does Go not have exceptions? 

        We believe that coupling exceptions to a control structure, as in the try-catch-finally idiom, 
        results in convoluted code. It also tends to encourage programmers to label too many ordinary 
        errors, such as failing to open a file, as exceptional. 

        Go takes a different approach. For plain error handling, Go's multi-value returns make it easy 
        to report an error without overloading the return value. A canonical error type, coupled with 
        Go's other features, makes error handling pleasant but quite different from that in other 
        languages. 

        Go also has a couple of built-in functions to signal and recover from truly exceptional conditions. 
        The recovery mechanism is executed only as part of a function's state being torn down after an error, 
        which is sufficient to handle catastrophe but requires no extra control structures and, when used 
        well, can result in clean error-handling code. 

        See the defer, panic and recover article for details. 

*/
/*
    Linting with go 

        go get -u github.com/golang/lint/golint

        golint ./... 
            - recurively lints code in the current location

*/