/*
    Concurrency is the composition of INDEPENDENTLY EXECUTING processes, while

    Parallelism is the SIMULTANEOUS EXECUTION of (possibly related) computations. 
    
    Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of 
    things at once. 
*/
/*
   GOMAXPROCS from the runtime package allows us to do parallelism. 

   Before go1.5, concurrency only ran on a single core unless you specified the GOMAXPROCS to use a certain 
   number of cors. 

        runtime.GOMAXPROCS(runtime.NumCPU()) // uses the maximum number of CPUs on this machine. 

    After go1.5 the default is using more than 1 core rather than using just 1. 

    init() is a special function that allows us to do initialization in our program, just like main(). 

    We can have init() as many times as we want in our package but we can only have 1 main(). Before other code
    starts executing, init() is executed. 
*/