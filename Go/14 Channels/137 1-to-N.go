/*
    We saw the example of having many goroutine functions writing to the same channel (N-to-1). What if 
    we have 1 channel with values on it and we want to have many functions pulling those values off?



*/
package main

func main() {
    c := make(chan int)
    done := make(chan bool)

    go func() {
        for i := 0; i < 20; i++ {
            c <- i
        }
    }()

    go func() {
        for n := range c {
            fmt.Println("1st-----:", n)
        }
        done <- true
    }()

    go func() {
        for n := range c {
            fmt.Println("2nd:", n)
        }
        done <- true
    }()


    <-done
    <-done
}