/*
    Go is lexically scoped using blocks

    1. The scope of a predeclared identifier is the universe block. 

    2. The scope of an identifier denoting a constant, type, variable or function (but not method) declared
        at top level (outside any function) is the package block. 
    
    3. The scope of the package name of an imported package is the file block of the file containing the 
        import declaration. 
    
    4. The scope of an identifier denoting a method receiver, function parameter, or result variable is 
        the function body.

    5. The scope of a constant or variable identifier declared inside a function begins at the end of the 
        ConstSpec or VarSpec (ShortVarDecl for short variable declarations) and ends at the end of the 
        innermost containing block. 
    
    6. The scope of a type identifier declared inside a function begins at the identifier in the TypeSpec 
        and ends at the end of the innermost containing block.

*/

/*
    A method receiver is what makes a method. We'll learn about that soon.
*/