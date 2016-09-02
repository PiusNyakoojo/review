/*
    Constants
        - A value that doesn't change
*/

const p string = "death & taxes"

/*
    Also notice that in Go, we don't name contants with all caps.

    We can also declare multiple constants at once:
*/

const (
    Pi  = 3.14
    Language = "Go"
)

/*
    Even with Pi.. we wouldn't write: PI as in other languages.

    iota
        - 9th letter of the greek alphabet
        - an extremely small amount

    In Go, if you set a const to an iota and then you set more consts to iota, they will continue to increment
*/

const (
    A = iota // 0
    B = iota // 1
    C = iota // 2
)

func main() {
    fmt.Println(A)
    fmt.Println(B)
    fmt.Println(C)
}

/*
    We can also declare a list of iotas as follows:
*/

const (
    A = iota // 0
    B   // 1
    C   // 2
)

const (
    D = iota // 0
    E   // 1
    F   // 2
)

/*
    As soon as we redeclare another iota in another const block, it resets.
*/

const (
    _ = iota // 0
    B = iota * 10 // 1 * 10
    C = iota * 10 // 2 * 10
)

/*
    In the following example we use bitshifting, also known as bit-wise operations.

        <<
            - bit-shift left

        >>
            - bit-shift right

    In binary, if we start out with a 1 and we shift that 10 places to the left:

        1 << 10
    
    Then we end up with 2^10. In other words

        2^0 << 10 === 2^10

    More generally,

        2^n << m === 2^(n + m)
*/

const (
    _ = iota // throw away the 0
    KB = 1 << (iota * 10) // 1 << (1 * 10) === 1024 bytes (1 Kilobyte)
    MB = 1 << (iota * 10) // 1 << (2 * 10) === 1,048,576 bytes (1 Megabyte)
)