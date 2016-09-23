/*
    Fan Out / Fan In is another design pattern for building concurrent programs. 

    Fan Out - Multiple funcs reading from that channel until it's closed. 
    Fan In - Multiple channels writing to the same channel 
*/
/*
    Multiple functions can read from the same channel until that channel is closed; this is called 
    fan-out. This provides a way to distribute work amongst a group of workers to parallelize CPU use 
    and I/O. 

        example:

            c := make(chan int)
            done := make(chan bool)

            go func() { // A single function writing to a single channel
                for i := 0; i < 20; i++ {
                    c <- i
                }
                close(c)
            }()

            // MULTIPLE functions reading from a SINGLE channel, until it is closed
            go func() {
                for n := range c {
                    fmt.Println("Me first:", n)
                }
                done <- true
            }

            go func() {
                for n := range c {
                    fmt.Println("Me second:", n)
                }
                done <- true
            }

            <-done
            <-done
        
        A function can read from multiple inputs and proceed until all are closed by multiplexing the input 
        channels onto a single channel that's closed when all the inputs are closed. This is called fan-in 

            example:

            c := make(chan int)
            d := make(chan int)
            e := make(chan int)
            done := make(chan bool)

            go func() { // A single function writing to a single channel
                for i := 0; i < 20; i++ {
                    c <- i
                }
                close(c)
                done <- true
            }()

            go func() { // A single function writing to a single channel
                for i := 0; i < 20; i++ {
                    d <- i
                }
                close(d)
                done <- true
            }()

            go func() { // A single function writing to a single channel
                for i := 0; i < 20; i++ {
                    e <- i
                }
                close(e)
                done <- true
            }()

            // A SINGLE function reading from MULTIPLE channels and closing when all channels are closed
            go func() {
                <-done
                <-done
                <-done
                fmt.Println("c, d and e are finished")
            }

      We can change our pipleine to run two instances of sq, each reading from the same input channel. We 
      introduce a new function, merge, to fan in the results: 

      func main() {
          in := gen(2, 3)

          // Distribute the sq work across two goroutines that both read from in. 
          c1 := sq(in)
          c2 := sq(in)

          // Consume the merged output from c1 and c2. 
          for n := range merge(c1, c2) {
              fmt.Println(n) // 4 then 9, or 9 then 4
          }
      }

      func merge(cs ...<-chan int) <-chan int {
          var wg sync.WaitGroup
          out := make(chan int)
          wg.Add(len(cs))
          for c := range cs {
            go func() {
                out <- <-c
                wg.Done()
            }()
          }
          return out
      }
*/
/*
    The merge function converts a list of channels to a single channel by starting a goroutine for 
    each inbound channel that copies the values to the sole outbound channel. Once all the output 
    goroutines have been started, merge starts one more goroutine to close the outbound channel after all 
    sends on that channel are done. 

    Sends on a closed channel panic, so it's important to ensure all sends are done before calling close. 
    The sync.WaitGroup type provides a simple way to arrange this synchronization
*/