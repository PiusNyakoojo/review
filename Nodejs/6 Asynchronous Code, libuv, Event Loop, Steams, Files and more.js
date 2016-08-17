/*
    Callbacks
        - A function you give to another function as an argument with the expectation that the function
        you passed will be called at some point.
    
    We've already seen that there are actually 2 event systems with Nodejs. There's  the Javascript custom
    event system (Event Emitter) which is actually an object with arrays of functions that will be called
    at some point. The real event system occurs in the System Events from libuv

    libuv is a C library that is embedded inside Node and is used elsewhere. This library manages the Events
    that come from the operating system.

    libuv can (for example) send a request to the OS. Also within libuv is a Queue of events. Also within
    libuv, there is an event loop where it constantly checks the queue to see if something has happened.

    When the Operating system does something, maybe an event occured, it will notify libuv and that event is
    placed on the Queue. When libuv sees a completed event on the Queue, it runs a callback function in
    the javascript that is handling that event.

    Event Driven Non-Blocking I/O in V8 Javascript

    Non-Blocking
        - Doing other things without stopping your program from running
        - This is made possible by Node's doing things asynchronously

    Buffer
        - A temporary holding spot for data being moved from one place to another.
        - Intentionally limited in size.

    Stream
        - A sequence of data made available over time.
        - Pieces of data that eventually combine into a whole.

    Sometimes we combine the idea of a stream and a buffer. As data comes down a stream, we store it in
    a buffer and then send whatever's in the buffer off to be processed. Then we grab more data from the
    stream and store it into the buffer, and when the buffer is full again, it's sent off to be processed.

    Binary data
        - Data stored in binary (0s and 1s)
        - The core of the math that computers are based on. Each one or zero is called a 'bit' or 'binary digit'
    
    0101 = 5 base 10

    Character Set
        - A representation of characters as numbers
        - Characters to Numbers in base 10
        - Each character gets a number. Unicode and ASCII are character sets.
        - When we talk about character sets, we're asking, What number is each character represented by?

    Unicode is a character sets

    'h' -> 104
    'e' -> 101
    'l' -> 108
    'l' -> 108
    'o' -> 111

    Character Encoding
        - How characters are stored in binary
        - Numbers from base 10 to numbers in base 2
        - The numbers (or code points) are converted and stored in binary.
        - When we talk about character encoding, we're asking, How many bits are we using to store
        each number? The more bits, the more characters we can store because the number can be potentially
        bigger.

    UTF-8
        - This means we're using 8 bits to store each number

    Javascript is good with character sets: translating numbers to characters and vise versa. But when
    it comes to encoding, javascript sucks. Because of that, Node, with the assistance of the V8 engine
    expands the javascript language and gives us some mechanisms to deal with binary data, 0s and 1s.

    This is good because when we're dealing with information coming from the internet, or files that
    are being streamed, we need to deal with binary data in some way.

    Buffers
*/