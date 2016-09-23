package main

func main() {
    c := make(chan int)
    done := make(chan bool)

    go func() {
        for i :=; i < 10; i++ {
            c <- i
        }
        done <- true
    }()

    go func() {
        for i :=; i < 10; i++ {
            c <- i
        }
        done <- true
    }()

    // We get blocked here until done is placed in the channel
    <-done
    <-done
    close(c)

    // To unblock the above, we need to take values off of chan c here..
    // but we never get here because we're blocked above!
    for n := range c {
        fmt.Println(n)
    }
}