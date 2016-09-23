/*
    Unbuffered channels block.

    To loop over the values in a channel: 


    c := make(chan int)

    go func() {
        for i := 0; i < 10; i++ {
            c <- i
        }
        close(c)
    }()

    for n := range c {
        fmt.Println(n) // 0 1 2 3 4 .. 9
    }
*/

/*
    When a channel is closed with close(c), you can no longer place values on the channel. However, you can 
    still receive values from a channel. Once a channel's values have been pulled, you can't pull any more. 

    Notice that our func main() doesn't exit. In fact, it halts at range c until the channel is closed. 

    "range c" is waiting for a value to be placed in the channel. Once a value's there, it will be pulled 
    off and processed by the loop 
*/