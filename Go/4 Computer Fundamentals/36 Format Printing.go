/*
    Format verbs
        - %#x // hexadecimal with leading "0x"
        - %#X // hexidecimal with capitalized text and leading "0x"
    
    Escape Characters
        - \t 
    
    A program that prints a series of numbers in decimal, binary and hex
        - loop syntax
    
    A program that prints the first 200 characters of UTF-8
        - loop syntax
*/
/*
    To comment out a line: 

        Ctrl + / 

*/

/*
    Loop syntax:

        // like a C for
        for <initializer>; <condition>; <post> {

        }

        // like a C while
        for condition {

        }

        // like a C for(;;)
        for {

        }


*/

for i:= 0; i < 200; i++ {
    fmt.Printf("%d \t %b \t %#X \n", i, i, i)
}

/*
    %q
        - UTF-8 format
*/

for i:= 0; i < 200; i++ {
    fmt.Printf("%d \t %b \t %#X \t %q \n", i, i, i, i)
}