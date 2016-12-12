/*
    https://medium.com/@matryer/line-of-sight-in-code-186dd7cdea88#.hhzgjmpkp
    
    Tips for a good line of sight:
        - Align the happy path to the left; you should quickly be able to scan down one column to see the expected execution flow
        - Don't hide happy path logic inside of a nest of indented braces
        - Exit early from your function 
        - Avoid else returns; consider flipping the if statement 
        - Put the happy return statement as the very last line 
        - Extract functions and methods to keep bodies small and readable 
        - If you need big indented bodies, consider giving them their own function 
*/