/*
    The three most important concepts to be able to use fluidly in order to test Go programs effectively are: 
        - Using interfaces in your Go code 
        - Constructing higher-level interfaces through composition (embedding)
        - Becoming familiar with go test and the testing module
*/
/*
    Summary of interfaces
        - Interfaces let you define a set of methods a type (often struct) must define to be considered an 
            implementation of that interface 
        - When any given type implements all the methods of that interface, the Go compiler automatically 
            knows that it is allows to be used as that type 

    Fledgling Go programmers may be familiar with writing unit tests in other languages such as Java, Python, 
    or PHP, and using "stubs" or "mocks" to fake out the results of a method call and explore the various 
    code paths you want to exercise in a fine-grained way. What many don't seem to realize, however, is 
    that interfaces can and should be used for this same type of operation in Go. 
*/
/*
    Using Composition 

    Interfaces are great for increased flexibility and control, but they are not enough on their own. Consider, 
    for instance, the case where we have a struct which exposes a large set of methods to external consumers 
    but also relies on these methods internally for some operations. We cannot wrap the whole object in an 
    interface to control the methods it relies on, since this would require implementing the method we are 
    trying to test. 
*/