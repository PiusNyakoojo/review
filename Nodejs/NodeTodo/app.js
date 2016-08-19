let express = require('express');
let app = express();

let mongoose = require('mongoose');
let config = require('./config');
let setupController = require('./controllers/setupController');
let apiController = require('./controllers/apiController');

let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);


app.listen(port);