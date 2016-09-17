/*
    Conversion
        - converting from one type to another. e.g. string to []byte
            - []byte(string)

    Assertion is used for interfaces. 
        - It asserts that the interface value is of a certain type. 

*/
/*
    package strconv

    Package strconv implements conversions to and from string representations of basic data types. 

    Numeric conversions
        - The mose common numeric conversions are Atoi(string to int) and Itoa (int to string). 

        i, err := strconv.Atoi("-42") // -42
        s := strconv.Itoa(-42) // "42"

    name := `Sydney`
    str, ok := name.(string) // error: invalid type assertion: name.(string) (non-interface type string on left)
*/
/*
    var name interface{} = `Sydney`
    src, ok := name.(string)

    if ok {
        fmt.Printf("%T\n", str) // string
    } else {
        fmt.Printf("value is not a string\n")
    }

*/

/*
    var num interface{} = 7
    fmt.Println(num + 6) // doesn't work: mismatched types
    fmt.Println(int(num) + 6) // doesn't work: cannot convert interface to int
    fmt.Println(num.(int) + 6) // 13
*/