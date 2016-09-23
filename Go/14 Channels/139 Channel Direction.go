/*
    chan T // can be used to send and receive values of type T 
    chan<- float64 // can only be used to send float64s
    <-chan int // can only be used to receive ints

    The <- operator associates with the leftmost chan possible:

    chan<- chan int // same as chan<- (chan int) // can only be used to SEND values of chan int
    chan<- <-chan int // same as chan<- (<-chan int) // can only be used to SEND values of type <-chan int
    <-chan <-chan int // same as <-chan (<-chan int) // can only be used to RECEIVE values of type <-chan int

    The optional <- operator specifies the channel direction, send or receive. If no direction is given, 
    the channel is bidirectional. A channel may be constrained to send or only to receive by conversion or 
    assignment.
*/