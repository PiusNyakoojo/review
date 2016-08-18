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
*/

/*
    Buffer is a global object and require('buffer') is not necessary. Just as Date is a global object that we
    don't need to require
*/

var buf = new Buffer('Hello', 'utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

/*
    In real applications, you may not be working with buffers directly. Rather, they are often returned
    by some utility within Nodejs. However, it's good to know what they are and how they work since you may
    encounter them.

    We said buffers were introduced to Nodejs because Javascript didn't have a good way to deal with binary
    data. Well that's changing in the next version of javascript in ES6 with Typed Arrays


    ArrayBuffer is a new feature in javascript
*/

var buffer = new ArrayBuffer(8); // 8 bytes = 64 bits of data
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
view[2] = 30; // not visible
console.log(view);

/*
    We can deal with the binary data with a view. This view is a typed array. This means that it is an array
    and that we can give it a buffer to work with. It is simply a way to deal with the binary data in the buffer.
    If we change the array, we're actually changing the buffer. When we read from the array, we're actually reading
    from the buffer.

    So in this case, our typed array is of type Int32Array and we pass it a buffer that can handle 64-bit numbers.

    Since our view is an Int32Array (holds 32-bit integers) and our buffer can hold a max of 64 bits of data, we
    can only store 2 32-bit integers. Hence our array can only hold 2 numbers
*/

/*
    FILES and fs
        - When dealing with files using fs, we're usually dealing with binary data.

    readFileSync
        - this is a synchronous way of reading a file. That means that when this function is called,
        the javascript engine will wait until the buffer is filled and it has the string back, before
        the V8 engine will move on to the next line of code.
        - This can be useful when you're setting up the first lines of code or perhaps you've got a config
        file and you need to read that before anything else is done.
        - But in most cases, you don't want to perform synchronous tasks like this. Especially if you have
        many people using the same service simultaneously. What will happen is that those users will be blocked
        since javascript is synchronous. And even though Nodejs is asynchronous, other javascript code can't be
        run until the javascript execution stack is cleared.
*/

var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log('sweet, our file is ready: ' + data);
});

/*
    Error-first callback:
        - Callbacks that take an error object as their first parameter
        - null if no error, otherwise will contain an object defining the error
        - This is a standard so we know in what order to place our parameters for our callbacks

    A buffer is just data sitting in memory. It's actually sitting in the Heap in V8, meaning it's just
    a spot where data sits. If the file is very large, and many people are running this program, we'll end
    up with many buffers sitting in the heap. And thus we'll end up with problems in our application where
    a lot of memory is being used.
*/

/*
    Stream
        - A sequence of data that is broken up into chunks.

    chunk
        - A piece of data being sent through a stream.
        - Data is split in 'chunks' and streamed.

    Streams in Nodejs are essentially event emitters. If we look at the stream source code, we see that
    stream inherits from event emitter.

    Readable streams can only be read from.
    Writable streams can only be written to. You can't read them.
    Duplex streams let you do both reading and writing to a stream.
    Transform streams let you change the data as it moves through the stream. So the data in the stream
        can be written to and when it's read, it will be different.

    Abstract Class or Base Class (a Base Class doesn't have to be an abstract class in all cases):
        - A type of constructor you never work directly with, but inherit from.
        - We create new custom objects which inherit from the abstract base class.
        - Since Stream is an Abstract Class, we never actually create an object using the new operator.
        - Streams don't implement certain methods that are needed in order to actually use them. They implement
        the base of the idea of a stream. Then it's up to us to decide how we're reading and writing information.

    With Streams in Nodejs, we have different types of Streams which actually inherit from the Stream Abstract
    Class. And since Stream inherits from EventEmitter, all streams that inherit the Stream Abstract Class are
    also Event Emitters.

    EventEmitter.prototype has on, emit methods
    Stream.prototype has its prototype as EventEmitter.prototype
    Stream.Readable.prototype has its prototype as Stream.prototype

    We can build our own custom Stream that itself uses the Stream.Readable.prototype as its prototype.

    So in the Web Swerver - Browser model, the Request stream that's sent from the browser to the server is
    a readable stream from Node's perspective. On the other hand, the Response stream is writable.

    When we read from a stream with fs.createReadStream(), our file is placed on a buffer. if our file fits
    or is smaller than the buffer space, then we'll have all of the data of the file. If the text file is
    bigger than the text file, then we'll get 1 chunk at a time, where each chunk is less than or equal to
    the size of the buffer.

    The highWaterMark key in the options object allows us to set the size of the buffer for out stream.
*/

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8', // utf8 encoding
    highWaterMark: 2 * 1024 // 2 kilobytes
});

readable.on('data', function(data) {
    console.log(data.length);
});

/*
    Creating a Writable Stream
*/

var writable = fs.createWriteStream(__dirname + '/greet2.txt');

writable.write('Hello World!');

/*
    Pipes
        - Connecting two streams by writing to one stream what is being read from another.
        - In Node, you pipe from a Readable stream to a Writable stream.

    This code is so common in Nodejs that there is a more efficient way of doing it now: Pipes.
*/

var fs = require('fs');

var readable = fs.createReadStream(`${__dirname}/greetings.txt`, {
    encoding: 'utf8',
    highWaterMark: 4 * 1024 // 4 kilobytes
});

var writable = fs.createWriteStream(`${___dirname}/greetingsCopy.txt`);

readable.on('data', function(data) {
    writable.write(data); // this is a very common occurence in Node libraries; it is more efficient to use pipes
});

/*
    A method called pipe is available on any readable stream.
        - takes a destination, where we send data from the stream.
*/

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');

readable.pipe(writable); // send the readable information to the writable stream

/*
    pipe() actually returns the destination so if our writable stream is also a readable stream, we can
    use pipe() again to send it to another writable stream.

    We don't have to stream data from one file to another file. We can stream data to anything that is a stream.
    For example, an internet connection to a file or vise versa.

    We're going to use zlib, which is part of node core. This module allows us to implement a gzip file (a
    file that is compressed). gzip is a common algorithm for compressing files. Node uses the zlib module
    to compress and uncompress files.

    With windows, we can't just right click on a gzip and unzip it. Usually we have to use a software. But
    with mac or linux this software is usually provided for us.
*/