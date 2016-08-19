let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

let people = [
    {
        name: 'John'
    }, {
        name: 'Jane'
    }, {
        name: 'Jack'
    }
];


app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.render('index', {
        serverPeople: people
    });

});

app.listen(port);