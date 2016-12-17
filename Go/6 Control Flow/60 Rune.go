/*
    fmt.Printf("%T", rune('a')) // int32
*/
/*
    Rune
        - character
            - a character from any alphabet from any language in the world.
            - for a string we use double quotes: "" or we use backticks: ``
            - for a rune we use single quotes: ''
        - an integer value identifying a Unicode code point
        - alias for int32
            - equivalent to saying: this is of type int32
            - how many bytes in 32 bits? (32 / 8 = 4 bytes)
            - UTF-8 is a 4 byte coding scheme
                - each character is represented by a number
            - with int 32 (4 bytes) we have numbers for each of the code points
    
    We can't convert a string to a rune!!!!
*/
/*
    One who makes no mistakes makes nothing at all.
    - Giacomo Casanova

    In the end, it's not the years in your life that count. It's the life in your years 
    - Abraham Lincoln

    If I'd followed all the rules, I'd never have gotten anywhere.
    - Marilyn Monroe

    Action Expresses Priorities
    - Gandhi
*/
/*
    In Go, we don't call it casting, we can it conversion and it's slightly different from casting. 

    We can convert a string literal into a slice of bytes with

        []byte("Hello")

    We're taking the characters of the string and converting them into a list of bytes. So there's going
    to be a byte for H, a byte for e, l etc.. So each character is a sort of numeric code point. The 
    character is represented by a byte and we should be able to see the bytes if we print it to the console

        fmt.Println([]byte("Hello")) // [72 101 108 108 111]

    Each number in the slice is the numerical representation of the byte data

    for i := 50; i <= 140; i++ {
        fmt.Printf("%v - %v - %v \n", i, string(i), []byte(string(i)))
    }
*/
