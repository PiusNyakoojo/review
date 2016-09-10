/*
    Hash Tables
        - One of the most useful data structures in computer science is the hash table. Many hash table 
        implementations exist with varying properties, but in general they offer fast lookups, adds and deletes. 
        - Go provides a built-in map type that implements a hash table. 

*/

/*
    Composite types like arrays and structs are also value types. When assigning with = the value of a value type 
    to another variable: j = i, a copy of the original value i is made in memory. 

    Reference types share memory addresses when another variable is assigned to the reference type variable. 

    Reference types in go: 
        - slice
        - map
        - channel

    The variables that are referenced are stored in the heap, which is garbage collected and which is a much larger
    memory space than the stack. 
*/