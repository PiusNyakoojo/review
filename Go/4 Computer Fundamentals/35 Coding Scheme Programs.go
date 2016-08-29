/*
    Coding Scheme Programs
        - a program that prints a quantity in decimal
        - in binary
        - in hex
        - a program that prints a series of numbers in decimal, binary and hex
        - escape characters
        - format printing
        - format verbs
        - loop syntax
        - a program that prints the first 200 characters of UTF-8
*/

/*
    To print something in binary, we use the Printf function. "f" stands for format. Standard output is the
    monitor. 
*/

fmt.Printf("%d - %b", 42, 42) // the second argument will be applied to %d, the first argument will be applied to %b 

/*
    Verb formatters:

        - %b 
            base 2 (binary)
        - %d 
            base 10 (decimal)
        - %x 
            base 16 (hex)
        - %t 
            the word true or false 
        - %T 
            A Go syntax representation of the type of the value 
        - %#v 
            A Go syntax representation of the value

    Escpae Characters:

        \n 
            - A line feed or newline
        \t 
            - Horizontal tab 
        \v 
            - Vertical tab
        \\
            - backslash
*/