/*
    To make our program wait, we can use something called a WaitGroup from the sync package. 

    import "sync"

    var wg sync.WaitGroup

    func main() {
        wg.Add(2)
        go foo()
        go bar()
        wg.Wait()
    }

    func foo() {
        // do whatever
        wg.Done()
    }

    func bar() {
        // do something else
        wg.Done()
    }
*/

/*
    wg.Add(2) // we're adding 2 items foo and bar to the wait group. When those functions are done, they'll say, 
    wg.Done() // and that will remove 1 from the WaitGroup. 

    wg.Wait() will wait until the semaphore in the waitgroup becomes 0. 
*/