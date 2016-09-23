/*
    Do not communicate by sharing memory; instead, share memory by communicating. 

        - Rather than locking variables within mutexes or passing them to an atomic function, use 
        channels which allow you to coordinate what's happening to data stored at some memory address. 
*/

/*
    To make a channel: 

        c := make(chan int)

    c is an unbuffered channel. To make a buffered channel: 

        c := make(chan int, 100)

    now we can place 100 things on the channel before it gets full. Buffered channels are quite advanced and until
    you develop your skills to that level, you should avoid them for now.

    When you put something on an unbuffered channel, the code is blocked until you take that value off of the 
    channel. In this regard, we can syncronize communication across independetly executing functions. 

        i, j := 10, 20
        c <- i // this adds the value of i to the channel. 
        c <- j // this is blocked until the first value of removed from the channel

        p := <-c // 10
        q := <-c // 20

*/

/*
    There are lots of nice idioms using channels. Here's one to get us started. In the previous section we 
    launched a sort in the background. A channel can allow the launching goroutine to wait for the sort 
    to complete. 

    c := make(chan int) // Allocate a channel. 
    // Start the sort in a goroutine; when it completes, signal on the channel. 

    go func() {
        list.Sort()
        c <- 1 // Send a signal; value does not matter.
    }()

    doSomethingForAWhile()
    <-c // Wait for sort to finish; discard sent value. 
*/
/*
    Receivers always block until there is data to receive. If the channel is unbuffered, the sender blocks 
    until the receiver has received the value. If the channel has a buffer, the sender blocks only until 
    the value has been copied to the buffer; if the buffer is full, this means waiting until some receiver
    has retrieved a value. 

*/