/*
    How does a computer read your program? Computers read your program in 3 ways (generally speaking):
        - Sequence
            - Code is read from top to bottom
        - Loop
            - for loop
                - init, cond, post
            - bool (while-ish)
            - do-while-ish
                - break
            - continue
            - nested
        - Conditionals
            - switch / case / default statements
                - no default fall-through // don't have to write break; after each case :D 
                - creating fall-through
                - multiple cases
                - cases can be expressions
                    - evaluate to true, they run
                - type
            - if 
                - the not operator
                    - !
                - initialization statement
                - if / else
                - if / else if / else
                - if / else if / else if / .. / else

*/

/*
    Go will do something called "inlining". If you have a function somewhere in the go file, if the function 
    is simple enough, Go will take the function and inline it into the main function.. basically it will take 
    the contents of the function and place it into the main function. This makes the program more performant 
    because we don't have the over head of passing parameters to the function or calling it separately.. Instead
    it will be run within the main function.

    The compiler does this on its own :D
*/

/*
    In computer science, control flow (or alternatively, flow of control) is the order in which individual 
    statements, instructions or function calls of an imperative program are executed or evaluated. 
*/