/*
    Question: This code results in a deadlock, can you determine why and how would you fix it?

    package main

    func main() {
        c := make(chan int)
        c <- 1
        fmt.Println(<-c)
    }
*/
/*
    Answer: The line with c <- 1 is blocking the function. It's sending data to the channel but there's
    nothing running to receive it. So to fix this we have to run the send at retrieve in separate goroutines.

    func main() {
        c := make(chan int)

        go func() {
            c <- 1
            close(c)
        }()

        fmt.Println(<-c)
    }
*/

/*
    Question: Why does this only print 0? And what can you do to get it to print all 0 - 9 numbers?

    func main() {
        c := make(chan int)

        go func() {
            for i := 0; i < 10; i++ {
                c <- i
            }
        }()

        fmt.Println(<-c)
    }

*/

/*
    Answer: This is printing 0 because <-c receives the first number passed from the channel and the halting is 
    stopped. 

    To fix this, we use range to halt the program until the channel is closed with close(c)

    func main() {
        c := make(chan int)

        go func() {
            for i := 0; i < 10; i++ {
                c <- i
            }
            close(c)
        }()

        for n := range c {
            fmt.Println(n)
        }
    }
*/