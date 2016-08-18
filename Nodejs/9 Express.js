/*
    npm install express --save

    Environment Variables
        - Global variables specific to the environment (server) our code is living in.
        - Different servers can have different variable settings, and we can access those values in code

    HTTP METHOD:
        - Specifies the type of cation the request wishes to make
        - GET, POST, DELETE, and others. Also called verbs.
        - This exists as part of the HTTP request that's sent from the client

    When we request the contents of a page i.e. a URL, it's usually a GET request. When we submit a form,
    it's usually a POST request.
*/

let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

/*
app.post('/', (req, res) {
    // This would handle the / request if the method id POST
});

*/

app.get('/', (req, res) {
    res.send(`
    <html>
        <head></head>
        <body>Hello WOrld!</body>
    </html>
    `);
});

app.get('/api', (req, res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});


app.listen(port);

/*
    Express allows us to search for not just a particular URLs, but also matching patterns.
*/

// will match acd and abcd
app.get('/ab?cd', (req, res) => { // removes or includes the b
    res.send('ab?cd');
});

// will match abcd, abxcd, abRANDOMcd, ab123cd, and so on
app.get('/ab*cd', (req, res) => {
    res.send('ab*cd');
});

/*
    Let's look at an interesting case where we're working with a variable in a router
*/

app.get('/person:id', (req, res) => { // id is the variable name
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>Person: ${req.params.id}</h1>
            </body>
        </html>
    `);
});

/*
    Alot of the work that happens between the client and server communication is what happens in between
    the request and response. A lot of processing usually goes on.

    Middleware:
        - Code that sits between two layers of software.
        - In the case of Express, sitting between the request and the response.

    Static Files:
        - Not dynamic Files
        - In other words, not processed by code in any way. For example, HTML CSS and image files are
        'static' files.

    It's a well known standard to make things that are accessible to the public by the server, to be placed
    in a public file.

    app.use('') uses middleware to reroute requests
*/

// every time a request for assets is made, we' look for the public file and return the file contents.
app.use('/assets', express.static(__dirname + '/public'));

/*
    Can we make our own middlewar? Absolutely! app.use takes a function as its second argument and
    we can handle how we want to handle the request there.

*/

app.use('/', function(req, res, next) {
    console.log('Request url: ' + req.url); // this will log any url with / so every url in this case. even /api, /person etc..

    next(); // express provides this so we can run the next middleware.. for example going to the next handler for '/'
});

/*
    If you think about it, the get method is also middleware.
*/

/*
    Templates and Template Engines

    Using a template engine with express is easy. Before Express can render template files, the following application
    settings have to be set. 
        - views, the directory where the template files are located. e.g. app.set('views', '/views')
        - view engine, the template engine to use. e.g. app.set('view engine', 'jade')

    Then install the corresponding template engine npm package.

        npm install jade --save

    EJS is another template engine. It's inspired by ASP.NET webforms.

        npm install ejs --save

    When sending the template, instead of using res.send() we use res.render('filename');

    We can pass an object to the render() method to add data to the view.
*/

/*
    Query string and POST parameters

        // getting query request
        GET /?id=4&page=3 HTTP/1.1
        Host: www.learnwebdev.net
        Cookie: username=abc;name=Tony


        // submitting a form
        POST / HTTP/1.1
        Host: www.learnwebdev.net
        Content-Type: application/x-www-form-urlencoded
        Cookie: num=4;page=2

        username=Tony&password=pwd

        // sending json data to server
        POST / HTTP/1.1
        Host: www.learnwebdev.net
        Content-Type: application/json
        Cookie: num=4;page=2

        {
            "username": "Tony",
            "password": "pwd"
        }

    Express parses the query string for us and we can access it with

        req.query.name_of_query_param

    req.url, req.params, req.query
*/

/*
    body-parser allows us to parse the body of a request

        npm i body-parser --save
    
    let bodyParser = require('body-parser');
*/

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/person', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400); // no body

    res.send(`Welcome: ${req.body.firstname} ${req.body.lastname}`);
});

/*
    Now let's create a form in our HTML:
*/

<form method="POST" action="/person">
    First name: <input type='text' id='firstname' name='firstname'><br/>
    Last name: <input type='text' id='lastname' name='lastname'><br />
    <input type='submit' value='Submit' />
</form>

/*
    A lot of application also use the jsonParser to parse json from the client.

*/

let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let urlencodedParser = bodyParser.urlencoded({extended: false});
let jsonParser = bodyParser.json();

app.post('/person', urlencodedParser, (req, res) => {

    if (!req.body) return res.sendStatus(400); // no body

    res.send(`Welcome: ${req.body.firstname} ${req.body.lastname}`);
});

/*
    An easy way to setup a JSON POST on the client side is to use jquery. So we'll import the script with

        <script src='https://code.jquery.com/jquery-1.11.3.min.js'></script>
    
    and write in our body:
*/

<script>
    $.ajax({
        type: 'POST',
        url: '/personjson',
        data: JSON.stringify({ firstname: 'John', lastname: 'Doe'}),
        dataType: 'json',
        contentType: 'application/json'
    });
</script>

/*
    So what we're doing here is sending an HTTP POST request that contains json as the body and we're using
    the bodyParser with the json method to parse the body's json content and make that available to us on the
    req.body object.

*/

/*
    RESTful APIs and JSON

    RESTful
        - An architectural style for building APIs.
        - Stands for 'Representational State Transfer'. We decide that HTTP verbs and URLs mean something.
    
    What would a RESTful API look like?
*/

app.get('/api/person/:id', (req, res) => {
    // get that data from database
});

app.post('/api/person', jsonParser, (req, res) => {
    // save to database
});

app.delete('/api/person/:id', (req, res) => {
    // delete from the database
});

/*
    Rather than handling things with 

        /api/person/:id/delete // this would be the delete url
        /api/person/:id/post // this would be the post url

    This makes it hard to judge what the HTTP response is supposed to do if you're just looking at the request url.
    HTTP already has these verbs built in so we can respond appropriately to those verbs.
    instead of doing things this way, we take advantage of the HTTP verbs as well.
*/

/*
    Structuring an application.

    Using the Express generator lets us very quickly create an application skeleton for how our application files
    could be structured.

        npm i express-generator -g
    
    It generals a particular directory structure with particular files.

        express myapp

    will create a folder called 'myapp' with the directory structure setup. Then run npm install to install the
    packages in our package.json

    
*/