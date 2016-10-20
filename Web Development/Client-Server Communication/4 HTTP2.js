/*
    Why HTTP/2 is better: 
        - Avoids Head of line blocking. 
        - Compresses headers 
    
    HTTP/1.1 doesn't work well with lots of requests. However, HTTP/2 works wonders!
    
    One of the reasons we have so many requests is because of Head-of-line blocking:
    HOL. Head of line blocking is when one request is blocking others from completing. 
    A browser will open AT MOST 6 connections to a server. That means at most 6 
    requests can be in flight simultaneously. 

    At the very least you would have to wait for 1 request to be sent and 1 response 
    to be received. This request time + response time is called the round trip and 
    can take anywhere from 20 - 50 ms on a good connection. 

    Let's do some math: A site needs to load 100 requests completely. We can only do 
    at most 6 requests in parallel so ideally: 

        100 / 6 ~ 17 requests per connection to download all 100 requests. 

    With each request averaging roughly 35 ms round-trip: 

        17 * 35 = 525ms total transfer time ~ 1/2 sec of waiting.. of doing nothing.

    Head of line transfer is a huge roadblock to website performance. With HTTP/2 
    we don't have to worry about Head of line blocking. 
*/
/*
    To use reduce the time it takes to send data, a lot of websites compress their 
    assets with gzip or other compression algorithms that work on the web. 

    Compression of the body data is great. But the header content of the request or 
    response is still uncompressed. That sucks. In addition, a lot of redundant 
    information is shared between the response and request: 

        Host: www.google.com
        User-Agent: Mozilla/5.0
        Connection: keep-alive
        Accept: text/html

    Let's look at the improvements. If a site has 100 requests and 800 bytes are 
    consumed per header that is rougly 80kb transferred header data. Unfortunately, 
    we can't compress the header with HTTP/1.1. 
*/
/*
    Security is another huge reason why HTTP/2 is superior to HTTP/1.1. TLS is a 
    required specification to enable HTTP/2. There is a very of HTTP/2 which doesn't 
    require TLS but all major browsers have opted out of supporting it xD.
*/
/*
    How does HTTP/2 solve Head of line blocking? How does it compress headers?

    Remember human readability with response headers in HTTP/1? Well that's gotta 
    go. Headers aren't simply compressed with gzip. Instead the engineers that 
    designed HTTP/2 compression that is tailored towards the specific structure 
    of headers and the multiplexing feature of HTTP/2.

    The second thing that HTTP/2 solves is Head of line blocking. It does this through 
    multiplexing. Multiplexing is combining multiple signals into a new single signal. 
    With HTTP/2 we now have 1 connection instead of 6. It seems like a bad mistake 
    but we are actually using the connection differently. 

    What used to be a dedicated connection in HTTP/1 is now called a stream. All 
    streams share that single connection. These streams are split up into multiple 
    frames and are being multiplexed onto that single connection. 

    When one stream is blocked another stream can take over that connection and 
    makes good use of what could have been idle time.

    All streams not only share a connection but also the compressor. So if the 
    header compressor notices that it has already sent some header info to the 
    client then it will send a reference to that data rather than sending the 
    actual data. 

    Multiplex definition:
        - A system or signal involving simultaneous transmission of several messages 
        along a single channel of communication
*/