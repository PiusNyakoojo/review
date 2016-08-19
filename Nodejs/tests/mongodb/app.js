let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

let mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds011238.mlab.com:11238/addressbook');

let Schema = mongoose.Schema;

let personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

let Person = mongoose.model('Person', personSchema); // a sort of function constructor for Person objects

let john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
});

// save the user

john.save(function(err) {
    if (err) throw err;

    console.log('person saved!');
});

let jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 Main St.'
});

jane.save(function(err) {
    if (err) throw err;

    console.log('person save!d');
});

app.use('/', (req, res, next) => {
    console.log('Request Url: ' + req.url);

    // get all the users
    // we could query the database by placing info in {}, but instead, we'll ask for everything.
    Person.find({}, (err, users) => {
        if (err) throw err;

        // object of all the users
        console.log(users);
    });

    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port);
