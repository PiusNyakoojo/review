/*
    Instead of having a function with a variadic parameter, we could pass in a list of parameters for the 
    function to handle.

    func main() {
        data := []float64{43, 56, 87, 12, 45, 57}

        n := average(data...) // we can spread out the slice by using ... after the argument
        fmt.Println(n)
    }

    func average(sf ...float64) float64 {
        var sum float64

        for _, v := range sf {
            sum += v
        }

        return sum / float64(len(sf))
    }
*/