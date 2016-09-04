/*
    break
        - break out of the loop!

    continue
        - skips the rest of the current loop iteration and goes to the next
    
    condition
        -  an expression that results in a boolean value 
*/

var sum, a int = 0

for sum < 20 {

    if a % 2 == 1 {
        continue
    }

    fmt.Println("value: ", a)

    if a % 4 == 0 {
        break
    }

    sum += a
    a++
}

/*
    The result of the above is:

    0

*/