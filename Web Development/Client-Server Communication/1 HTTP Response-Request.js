/*
    The Web is a subset of the internet. Computers already had a way of communicating with one another through 
    email, ftp and other information transferring protocols, there wasn't a common and publicly available way to 
    publish and access documents. 

    This is where Tim Berners-Lee comes in. He wanted an open way for people to publish, read and comment on 
    papers through the internet. He wanted a mesh of linked documents called Hyper Text Documents. Berners-Lee 
    chose a subset of SGML (Standard Generalized Markup Language) and called it HTML - HyperText Markup language.

    Then Tim designed HTTP (HyperText Transfer Protocol) to transfer these HTML documents. Hypertext sounds 
    complicated but it means that the text in that document can reference other documents. These references are 
    called links. By getting a document, the user can not only read the document but can also navigate to 
    related documents through these links - especially for the scientific context for which Bernes-Lee designed it. 
*/
/*
    Files can link to images, code, styles and a lot of other things. 
*/
/*
    So how do HTTP work?

    Bernes-Lee designed a template that you can fill out to make a request for a certain document on a server.

    The Original protocol: HTTP 0.9 was incredibly limited. 

    You fill in the template or form and send it to a server. Since the server can understand and parse HTTP 
    requests, it understands what the user is requesting. 
*/
/*
    HTTP REQUEST

    GET /pictures/kitty.jpg HTTP/1.1
    Host: www.google.com
    User-Agent: Mozilla/5.0 
    Connection: keep-alive
    Accept: text/html 
    If-None-Match: b2arb0a1r6a

*/
/*
    HTTP Methods: GET, POST, DELETE, PUT

    After the 1st line containing the method, resource name and HTTP version, we have the HTTP headers.
    All of the headers are optional except for the Host header.
*/
/*
    HTTP RESPONSE

    HTTP/1.1 200 OK
    Content-Length: 16824          // not optional
    Server: Apache
    Content-Type: text/html 
    Date: Wed, 06 Apr 2016 
    Etag: fd87e6789

    <binary date> // The actual data e.g. image, json etc..
*/
/*
    Use Chrome Dev tools to view the number of requests from a page and the amount of data transferred in bytes.
*/
/*
    POST requests can have information in the body.

    It's usually recommended to not respond to a POST request with a website but instead with a redirect. 
*/