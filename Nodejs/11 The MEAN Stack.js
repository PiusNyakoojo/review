/*
    Where does node fit in the MEAN stack?
        - MongoDB, Express, AngularJS and Nodejs

    Technology stack
        - The combination of all technologies used to build a piece of software.
        - Your database system, your server side code, your client side code, and everything else.
*/

/*
    DOM
        - The structure browsers use to store and manage web pages. (generally, a collection of C++ objects)
        - Stands for Document Object Model. Browsers give the Javascript engine the ability to manipulate
        the DOM.
        - The browser uses the DOM to render the webpage and gives access to javascript through some API calls
        to access to DOM.

    When the browser receives the string of html, it processes it once and builds the DOM, which is a hierarchy
    of HTML elements. Then the browser renders the webpage using the DOM. Not using the string that it was given
    to build the DOM. The browser also contains a JavaScript Engine. In Chrome this is V8. Nodejs also uses V8 but
    if you're using a different browser, they may implement a different engine.

    If the browser see a script tag, it will takes the contents of that script tag and pass it to the javascript
    engine to be parsed and executed. If the browser gives some extra functionality to javascript, i.e. adding an
    API to manipulate the DOM, then we can use that API to restructure the DOM. Doing that will cause the browser
    to re-render the page.

    Frameworks like Angularjs, React and Ember allow us to not have to worry about writing code that is specific
    to the API of a certain browser. Rather we can focus on building the application.

    By accessing scripts from a CDN, we take advantage of the fact that the CDN will get the script to a user
    faster on average regardless of where they are. In addition, in case the browser has already cached the
    script or asset from this CDN, they again, access times to the script are faster. So CDNs in general are sweet!
*/

/*
    Angular 1.x, Angular 2, React.js, Ember.js, Backbone.js all of these front end frameworks are just javascript.
    They're not adding anything new to the javascript language. They're just trying to make it easier when developing
    client side applications.

    Full-Stack Developer:
        - A developer who knows all the pieces of a software stack.
        - And thus can build software by themselves.

    In EJS <%= %> means we're trying to output valid html. But if we want to output javascript

        <%- JSON.stringify(ourObject) %>
*/