/*
    What did I learn?
        - Switch statements
            - can have multiple conditions in each case separated by ",". For example
            case "Jenny", "Julie":
                fmt.Println("Hey ladies!")
            - Doesn't need to have condition. If there's no condition, the program will run from case to case
            starting from the top and the first one to evaluate to true will be executed. 
            - fallthrough keyword
                - by default, fallthrough is not activated. To fall through to the next case, you have to 
                specify this explicitly with the fallthrough keyword at the end of the case. 
                - the default case is not executed even if we use fallthrough to the case above the default. 
        - If statements
            - We can declare and assign variables in the statement and then specify a condition. For example
            if err := database.Query("blah blah"); err != nil {
                // do something
            }

        - Runes
            - Runes are just characters. Unicode characters to be precise.
            - These character, by default, are encoded by UTF-8 which is uses 1 to 4 bytes to represent each
            character.
            - You can't convert a string into a rune
            - use single quotes to specify a rune literal.
            - rune is just an alias for the int32 type. In other words, rune is just another way to say int32

        - Strings
            - Use double quotes "" or back quotes `` to specify a string literal.
            - Back quotes allow you to write multi-line strings
        
        - For Loops
            - Go doesn't have a while or do-while, instead you use different variations of for 
            - for init; condition; post { // traditional for loop

            }
            - for condition { // while loop

            }
            - for { // loop to check or listen to something.

            }
*/

/*
    Review with professor - Todd McLeod :D

        Control Flow
            - A computer program will read the instructions sequentially until it hits another control flow structure
            which may be a loop or a conditional statement.

        With Switch, we can switch on types, not just values!! We used something called assertions which we will
        learn more about later. 

        We also made our own type which was a struct.

        We also learned about Lexical elements which are the elements we use to talk about a language.

        We also saw how we can convert a string into a list of bytes

            []byte("Hello")
*/