/*
    The Fan In pattern is a way of writing concurrent Go programs in such a way that multiple channels write to the 
    same channel. We're aggregating the result of multiple channels into a single channel.

    The Fan Out pattern is when we have multiple functions reading from a single channel until it's closed. 

*/
/*
    Why use the Fan Out / Fan In pattern?

    My answer:
        Any one of the goroutines that we run that reads from a single channel (Fanning out) finishes execution at 
        different times. Some are faster than others. The fastest one will always get the value from the channel and 
        the channel can be written to again. So in other words by increasing the number of goroutines accessing the 
        same channel, you're making the program faster because there are more workers and the fastest worker will 
        always lead the communication process.

        In conjunction with the Fan Out process, the Fan In process writes to a single channel, the results that arrived 
        the earliest. 
*/