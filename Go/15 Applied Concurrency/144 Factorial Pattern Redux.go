/*
    Change the code below to execute 100 factorial computations concurrently and in parallel. Use the
    "pipeline" pattern to accomplish this. 

    package main 

    import "fmt"

    func main() {
        c := factorial(4)
        for n := range c {
            fmt.Println(n)
        }
    }

    func factorial(n int) chan int {
        out := make(chan int)
        go func() {
            total := 1
            for i := n; i > 0; i-- {
                total *= i
            }
        }()
        return out
    }
*/
/*
    What realizations did you have abuot working with concurrent code when building your solution? eg, 
    what insights did you have which helped you understand working with concurrency? Post your answer, 
    and read other answers here: https://goo.gl/uJa99G

*/