/*
    When you have things running concurrently and different processes are trying to access data through
    a channel, you can have some overriding occur.

    A data race is when two or more goroutines attempt to read and write to the same resource at the 
    same time. Race conditions can create bugs that totally appear random or can never surface as they 
    corrupt data. 

    Atomic functions and mutexes are a way to synchronize the access of shared resources between goroutines. 

    Note:
        - Goroutines need to be coordinated and synchronized
        - When two or more goroutines attempt to access the same resource, we have a data race
        - Atomic functions and mutexes can provide the support we need. 
*/