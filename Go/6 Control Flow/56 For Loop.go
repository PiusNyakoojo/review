/*
    https://forum.golangbridge.org/

        - Great place to have your golang questions answered quickly!
*/

/*
    A "for" statement specifies repeated execution of a block. The iteration is controlled by a condition, 
    a "for" clause, or a "range" clause. 

    ForStmt = "for" [ Condition | ForClause | RangeClause ] Block . 
    Condition = Expression .

    In its simplest form, a "for" statement specifies the repeated execution of a block as long as a 
    boolean condition evaluates to true. The condition is evaluated before each iteration. If the condition 
    is absent, it is equivalent to the boolean value true. 


for a < b {
    a *= 2
}

*/
/*
    The Go for loop is similar to - but not the same as - C's. It unifies for and while and there is no 
    do-while. There are three forms, only one of which has semicolons.
*/

/*
// Like a C for
for init; condition; post {
    
}

// Like a C while
for condition {

}

// Like a C for(;;)
for {

}
*/

/* 
    Short declarations make it easy to declare the index variable right in the loop. 


sum := 0

for i := 0; i < 10; i++ {
    sum += i
}

*/

/*
    break
        - break out of the loop!
*/