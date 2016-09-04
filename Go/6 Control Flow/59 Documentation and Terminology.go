/*
    Casey Neistat

    Documentation
        - golang spec
        - effective go
    
    Terminology
        - lexical elements
        - literal values
        - runes
    
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
    
    printing UTF-8
*/

/*
    Lexical elements
        - Lexical means: of or relating to the words or vocabulary of the language. 

    Lexical elements of Go 
        Comments
            - // 
            - /*
        Tokens
            - 4 types: identifiers, keywords, operators and delimiters, and literals
            - Whitespace, horizontal tabs, carraige returns and newlines are ignored except as it 
            separates tokens that would otherwise combine into a single token
            - A new line or end of file may trigger the insertion of a semicolon
        Semicolons
        Identifiers
        Keywords
            - Served words for the go programming language; we can't name any of our variables or functions
            after these words
            - break case chan const continue
            - default defer else fallthrough for 
            - func go goto if import 
            - interface map package range return 
            - select struct switch type var 
        Operators and Delimiters
            - The following character sequences represent operators, delimiters and other special tokens 
            - + - * / %
            - & | ^ << >> 
            - and many more
        Integer literals
        FLoating-point literals
        Imaginary literals
        Rune literals
        String literals
*/