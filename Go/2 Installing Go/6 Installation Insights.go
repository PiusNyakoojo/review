/*
    32 and 64 bit operating systems indicate how many 0s and 1s the computer can process in a single
    machine cycle. A 32-bit operating system can only process 32 bits per machine cycle. A 64-bit
    operating system can handle word sizes of 64 bits per cycle.

    Word size is the size of the information that a machine can handle in each cycle of operation.
    e.g. 32 bit word size or 64 bit word size is common for modern computers.

    SHA1 is a hash algorithm.
        - A hash algorithm takes a bunch of code (0s and 1s) and it will produce the same result
        for the same input
        - However, if the input is even slightly different, then ideally, the output is completely
        different result.

    A SHA1 Checksum allows the sender of a message to hash some code and then when we receive the
    message or data, we can also hash it and check if we got the same hash result. If the result
    is the same, we know that there wasn't a loss in data. If the hash result is different, then
    there may have been a fault in the data transition and our data is corrupted, or perhaps we
    are being given something that wasn't intended for us to receive through some nefarious scheme.

    Google:
        how to verify SHA1
    
    In a terminal prompt we can use

        openssl sha1 [full path to file]

        openssl sha1 go1.7.windows-amd64.msi

    We can also use SHA256

        openssl sha256 go1.7.windows-amd64.msi
    
    To ensure we have go installed

        go version
*/