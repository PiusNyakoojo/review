/*
    https://godoc.org/encoding/json

    encoding
        - Marshal/Unmarshal
            - string
        - encode/decode
            - stream
    Marshal
        - basic
        - unexported fields
        - tags

    Marshal and encode do the same thing except Marshal encodes a string (a slice of bytes) and encode encodes
    a stream (it wants to write the encoding back as a response).

    Unmarshal and decode are the same thing except Unmarshal takes a string (a slice of bytes) and converts it 
    to its struct equivalent. Whereas decode takes input from a stream (maybe some data being streamed from the
    client to the server).

    You should use encode/decode with streams of data. Use Marshal/Unmarshal with strings. 
*/