package main

import (
	"fmt"
)

func main() {
	fmt.Println("1. This is the first statement")

	defer fmt.Println("2. When does this occur?")

	{
		defer fmt.Println("3. And this?!")
		{
			fmt.Println("4. What about this?")
			defer fmt.Println("5. Where do I belong?")
		}
		fmt.Println("6. Do I mean something to you?")
	}

	fmt.Println("7. Why am I always last?")
}

/* Expectation 1
   If defer defers the function to the end of the block, this is what I expect
   1 4 5 6 3 7 2
*/
/* Expectation 2
   If defer defers a function to the end of the outer most function down to main, this is the expected result.
   Also, we're expecting there would be a defer queue, where it's first in first out for executing each defered
   function

   1 4 6 7 2 3 5
*/
/* Result

1 4 6 7 5 3 2

	So this result is similar to the expectation of 2 except the queue is maintained by first in last out order.
	So in other words, the first defer statement to be declared will be the last to be executed within our main
	func().

	In addition, we learned that defer doesn't care about block as our expectation 1 suggests. defer will call
	the defered function at the end of our func first in last our order!!

	The documentation reads:
		deferred functions are invoked immediately before the surrounding function returns, in the reverse order
		they were deferred.
*/
