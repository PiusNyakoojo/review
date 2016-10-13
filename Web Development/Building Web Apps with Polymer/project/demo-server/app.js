let express = require('express');
let app = express();
let path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../app/index.html'));
});

app.use(express.static(path.join(__dirname, '../')));
let http = require('http').Server(app);
http.listen(8080);