/*
    Let's take what we've learned about Nodejs, Express, etc. and build an application.

    Let's build a simple Todo application.
        - A user can add, edit, and delete 'todos'
        - Each todo can be marked as complete
        - Each todo can have one optional file attachment
        - One person cannot access the todos of another

    
        npm install express --save
        npm install ejs --save
        npm install body-parser --save
        npm install mongoose --save
    
    Mongoose by default provides a single connection and that stays open. So we can't close the connection.
*/

/*
    Adding Seed data is just adding initial data to the database.
*/

/*
    If we want to setup our own fake data we can use a tool called

    JSON Generator:

        http://json-generator.com

    It's standard practice to build your API endpoints before building out the rest of your application (e.g.
    the user interface, etc.) To test out POST and DELETE end points we can use tools to help us do this without
    building any front-end code.

    Postman is a utility we can use to test our API

        https://getpostman.com

    

*/