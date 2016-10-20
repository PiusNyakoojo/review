/*
    As a general rule, javascript is not allowed to access an origin other than its own. 

    An origin is comprised of 3 parts:
        - Data Scheme
        - Hostname
        - Port

    For Udacity:

        - Scheme: https://
        - Hostname: www.udacity.com
        - Port: 443

    If you change any of these parts, you'll be on a different origin and different 
    rules will apply.

    Cross-origin fetch requests aren't possible if you don't have access.

    You can't interact with an image from a cross-origin tag in the same way you can 
    interact with an image tag in the same origin. For example, you can't inspect 
    the pixels of the image inside a canvas. 

    The user's browser enforces the same-origin policy, not the server. 
*/
/*
    Sometimes you want to allow other people to access your resources even if they 
    are from another origin. This is mostly relevant API providers who want their 
    service to be available to other services and users. We can override the 
    browser's cross-origin resource sharing (CORS) rules. 

    CORS has been adopted by API providers as the primary way to share resources. 
    CORS allows certain cross-origin requests without relying on client-side 
    javascript. CORS, however, requires server-side code configuration. 

        Request:

        GET /courses?status=enrolled
        Host: api.udacity.com
        Referer: yourcourselist.com

        Response:

        HTTP/1.1 200 OK
        Date: Mon, 30 May 2016 00:23:53 GMT 
        Access-Control-Allow-Origin: yourcourselist.com
        Connection: Keep-Alive
        Content-Type: application/xml
*/
/*
    Preflight Requests use the OPTIONS header and allows the browser to signal that 
    it only wants to check what is allowed and what is not. 

        Request:

        OPTIONS /
        Referer: yourcourselist.com

        Response:

        200 OK 
        Access-Control-Allow-Origin: yourcourselist.com // Only headers are sent.

    However, not all requests will have preflights: e.g. images and form requests. 
*/
/*
    PUT preflights a request. 

    Cross-site request forgery (CSRF)
        - An addtional token that is appended to a form by a server
        - If someone submits a request, the server checks if the tokens match. If so 
            then the request goes through. Otherwise, the request is rejected.
*/
/*
    Lesson 5 - CSRF Solution:

    var body = 'request=Umbrella+Corp&amount=666';
    fetch('http://bank.127.0.0.1.xip.io:8080/transfer', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Length": body.length,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: 'include',
        body: body
    }).then(function(res) {
        // ...
    }).catch(function(err) {
        // ...
    })
*/
/*
    The PUT method also sends a preflight request. 

    fetch('some_url', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "X-Forwarded-For": "www.google.com"
        }
    }).then(function(res) {
        // do something
    }).catch(function(err) {
        // handle error
    })
*/
/*
    XSS - Cross-site scripting occurs because javascript can be injected to any 
    site and get access to all of that site's data. 

    This easily happens when user input isn't validated. Always validate your user's 
    input 
*/