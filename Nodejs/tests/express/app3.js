let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 3000;

let urlencodedParser = bodyParser.urlencoded({extended: false});
let jsonParser = bodyParser.json();

app.post('/person', urlencodedParser, (req, res) => {

    if (!req.body) return res.sendStatus(400); // no body

    res.send(`Welcome: ${req.body.firstname} ${req.body.lastname}`);
});

app.post('/personjson', jsonParser, (req, res) => {
    console.log(`Welcome-json: ${req.body.firstname} ${req.body.lastname}`);
    res.send(JSON.stringify(`Welcome-json: ${req.body.firstname} ${req.body.lastname}`));
});

app.use(express.static(__dirname + '/views')); // go to localhost:3000/form.html

app.listen(port);