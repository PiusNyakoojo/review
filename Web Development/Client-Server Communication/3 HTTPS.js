/*
    If someone is able to eavesdrop on an HTTP connection, they can extract the data 
    they need. It is best to keep your site encrypted and transer information through 
    the HTTPS protocol.

    Firesheep is an extension for the Firefox web browser that uses a packet sniffer 
    to intercept unencrypted cookies from websites such as Facebook and Twitter. 
    As cookies are transmitted over networks, packet sniffing is used to discover 
    identities on a sidebar displayed in the browser, and allows the user to 
    instantly take on the log-in credentials of the user by double-clicking on the 
    victim's name. 
*/
/*
    Man In the Middle (MITM)

    What happens to a non-HTTPS site when you load it through the proxy?


    What is a Proxy? A Proxy is a legitimate "Man in the middle" and serves many purposes:
        - saving bandwidth by adding additional compression
        - downsampling images
        - doing aggressive caching

*/
/*
    When we talk about HTTPS we're actually talking about HTTP and TLS.
        - HTTP: Hypertext Transfer Protocol 
        - TLS: Transport Layer Security

    TLS is not restricted to HTTP. Other protocols can use it as well. For example, 
    FTP (File Transfer Protocol): FTPS = FTP + TLS. 

    TLS wraps information in such a way that it can't be unwrapped except by the intended
    recipient. In practice, it is impossible to break a TLS encryption. To ensure that 
    the server is talking to the intended user, TLS uses something called the "Chain 
    of trust".

    The server identifies itself with a certificate that contains both some meta data 
    about itself and a fingerprint of its encryption key. These certificates are issued 
    by one of many certificate authorities. If that certificate is signed by one of 
    the authorities, you know that if the key that you're using matches the fingerprint
    then you're talking to the right server.

    The list of certificate authorities can be found in the browser. You can even 
    add your own certificate if you wanted to. The cost money since they not only 
    validate your server but they validate that you're also the owner of your server.

    Let's encrypt comes to the market and offers certificates for free!
*/
/*
    TLS has 2 important cryptographic building blocks:
        - Encryption 
        - Hashing 

    When people think of encryption, they often think about asymmetric encryption: You 
    encrypt your data and give that encrypted data to someone else. The recipient 
    needs the same key to decrypt the data.

    Asymmetric encryption is also known as public key encryption. 

    Next is hashing. There are 2 important properties of hashing: 
        - When we hash some data into another form, it should not be reversible.
            - In other words, you shouldn't be able to obtain the input from 
            knowing the output.
        - Can't yield the same Hash value even for input that is nearly identical.

    One of the most popular hashing algorithms is SHA which comes in many flavors 
    including: 
        - SHA1
        - SHA256
        - SHA512

    The number indicates the size of the output in BITS. No matter how big the 
    document input is, you'll always get 256-bit output of information with SHA256.
*/
/*
    Certificates serve to sign the document on the server before sending a response 
    to the client. When a server signs a document and encrypts it with its public key, 
    that document is called a signed document. When the document reaches the client 
    it is able to decrypt the document and read the signature and knows that it has 
    received the document from the server and not some random proxy. 
*/
/*
    Documents can get quite large and encrypting and decrypting them can take some 
    time with Assymetric encryption. That's why in practice we only encrypt the 
    hash with the signature rather than the raw data. 

    So instead of 

        Raw + Signature -> signed document 

    We have 

        (Raw -> Hashed data) + Signature -> signed document 
*/