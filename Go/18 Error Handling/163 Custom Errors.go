/*
    "Error values in Go aren't special, they are just values like any other, and so you have 
    the entire language at your disposal." - Rob Pike
*/
/*
    func main() {
        _, err := Sqrt(-10)
        if err != nil {
            log.Fatalln(err)
        }
    }

    func Sqrt(f float64) (float64, error) {
        if f < 0 {
            return 0, errors.New("norgate math: square root of negative number")
        }
        // implementation
        return 42, nil
    }
*/
/*
    errors is a really small package. There's a single function called New which we use to create 
    an error. 
*/
/*
    It is idiomatic Go to have the letters "Err" leading the name of the error. So for example 

        var ErrNorgateMath = errors.New("norgate math: square root of negative number")

*/
/*
    In bufio:

        var (
            ErrInvalidUnreadByte = errors.New("bufio: invalid use of UnreadByte")
            ErrInvalidUnreadRune = errors.New("bufio: invalid use of UnreadRune")
            ErrBufferFull = errors.New("bufio: buffer full")
            ErrNegativeCount = errors.New("bufio: negaitve count")
        )
*/
/*
    Providing Context with Errors:

    Errorf from the fmt package formats according to a format specified and returns the string as a 
    value that satisfies error. 

        fmt.Errorf("norgate math: square root of negative number %v", f)
*/
/*
    Library routines must often return some sort of error indication to the caller. As mentioned earlier, 
    Go's multivalue return makes it easy to return a detailed error description alongside the normal return 
    value. It is good style to use this feature to provide detailed error information. For example, as 
    we'll see, os.Open doesn't just return a nil pointer on failure, it also returns an error value that 
    describes what went wrong. 

    By convention, errors have type error, a simple built-in interface. 

    A library writer is free to implement this interface with a richer model under the covers, making it 
    possible not only to see the error but also to provide some context. As mentioned, alongside the usual 
    *os.File return value, os.Open also returns an error value. If the file is opened successfully, the error 
    will be nil, but when there is a problem it will hold an os.PathError: 

    type PathError struct {
        Op string // "open", "unlink", etc.
        Path string // The associated file. 
        Err error // Returned by the system call. 
    }

    func (e *PathError) Error() string {}
*/

/*
    Recall that a receiver can be a reference type or value type. If it's a reference type, only a reference to 
    the type implements the function. If it's a value type, both reference and value implement the method

    T - value type 
    *T - reference type

    func (v *T) Whatever() {} // only a value of type *T implements this. 
    func (v T) Hey() {} // values of type T or *T implement this. 
*/
/*
    type NorgateMathError struct {
        lat, long string
        err error
    }

    func (n *NorgateMathError) Error() string {
        return fmt.Sprintf("a norgate math error occured: %v %v %v", n.lat, n.long, n.err)
    }

    func Sqrt(f float64) (float64, error) {
        if f < 0 {
            nme := fmt.Errorf("norgate math redux: square root of negative number: %v", f)
            return 0, &NorgateMathError{"50.2289 N", "99.4656 W", nme}
        }

        return 42, nil
    }

*/