/*
    To make a slice

        m := make([]slice, <length>, <capacity>)

        m := make([]slice, 1, 25)

    A slice is pointing to an underlying array, the length of that array, and the capacity of that array. It's 
    called a reference type because it is already a reference to its underlying data.

    Reference Types
        - types which reference something else. 

    A slice is a three word data structure. A "word" is the amount of binary digits that your CPU can 
    process at a time (or machine cycle). Older computers are 32 bit machines. Newer computers are 64 bit
    machines. We could say their word size is 32 bits; or 64 bits.package 7 Functions
    
    So, a slice is a three word data structure.

    This means that a slice is a data structure that holds three 64 bit chunks.

    The first word (64 bit chunk) is a pointer to an underlying array; the second word is the length; 
    the third word is the capacity. 

    We'll learn what all of that means in the course, but the point to take away right here is that a 
    slice is referencing an underlying array. The slice doesn't hold the data "stored in it" but instead
    points to an array which is holding that data. 

    The slice is a reference type. 

    It's referencing the underlying array
*/