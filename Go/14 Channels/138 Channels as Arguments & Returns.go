/*
    Deadlock is when a goroutine passes a value to a channel but there's no other goroutine to pull that 
    value off the channel. Or vice versa: The goroutine wants to receive but there's no goroutine that's 
    passing a value. 

*/