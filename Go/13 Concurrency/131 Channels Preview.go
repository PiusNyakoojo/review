/*
    As expected of a 21st century programming language, Go comes with built-in support for communication 
    between applications (networking, client-server, distributed computing, see chapter 15) and support 
    for concurrent applications. These are programs that execute different pieces of code simultaneously, 
    possibly on different processors or computers. The basic building blocks Go proposes for structuring 
    concurrent programs are goroutines and channels. Their implementation requires support from the 
    language, the compiler and the runtime. The garbage collection which Go provides is also essential for 
    easy concurrent programming. 

    Do not communicate by sharing memory. Instead, share memory by communicating. 

    Communication forces coordination.

    Some people use {} to indicate where the mutex is located. 

    {
        mutex.Lock()
        // do something
        mutex.Unlock()
    }
*/