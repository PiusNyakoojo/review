/*
    Javascript, JSON and Databases.

    Conceptual Aside: Relational databases and SQL
        - When we talk about relational databases, we're typically talking about a table with fields (or columns)
        and rows of data.

        - Normalized data is data that doesn't repeat itself unnecessarily.

        - We use SQL (Structured Query Language) to ask the database a question and get a result as a table.

    SELECT People.ID, Firstname, Lastname, Address
    FROM People INNER JOIN PersonAddresses ON
    People.ID = PersonAddresses.PersonID
    INNER JOIN Addresses ON
    PersonAddresses.AddressID = Addresses.ID

    So how does javascript deal with these tables? Well a table is seen as an Array and each row is an object
    with key-value pairs that correspond to the fields (or columns) for the table.
*/

[
    {
        ID: 1,
        Firstname: 'John',
        Lastname: 'Doe',
        Address: '555 Main St.'
    }, {
        ID: 2,
        Firstname, 'Jane',
        Lastname: 'Doe',
        Address: '555 Main St.'
    }
]

/*
    So this is how we deal with tabular data in Javascript. We just need something to connect to the database and
    convert the tabular data into a javascript object. We can find that tool on the npm registry!

    There's a really good package for using mysql in node: mysql

        npm install mysql --save

    NoSQL:
        - A variety of technologies that are alternatives to tables and SQL.
        - One of those types is a document database. MongoDB is one of those.

    Mongoose is the popular npm package that allows us to connect to MongoDB.
    Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

        npm install mongoose --save

        let mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/my_database');

    After setting up mongoose, setup a schema:

*/

let commentSchema = new Schema({
    name: { type: String, default: 'hahahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
    buff: Buffer
});

let Comment = mongoose.model('Comment', commentSchema); // register schema to use as a function constructor

let commentByJohn = Comment({
    name: 'John',
    age: '22',
    bio: 'Grew up on Mars',
    date: Date.now()
});

// save commentByJohn

commentByJohn.save((err) => { // write data to the database
    if (err) throw err;

    console.log('Comment saved!');
});

/*
    When retrieving data from the database

*/

// we can pass queries to the {} object, but in this case we'll get all the data about comments.

Comment.find({}, (err, comments) => {
    if (err) throw err;

    console.log(comments);
});

/*
    Web server checklist

        - Better way to organize our code into reusable pieces
        - Ability to handle files and binary information
        - Ability to handle long processes and hence long wait times
        - A way to communicate over the internet
        - A way to deal with databases
        - The ability to accept requests and send responses in the standard format (HTTP)

*/