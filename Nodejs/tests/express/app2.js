let express = require('express');
let port = process.env.PORT || 3000;

let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public')); // map asset requests to the public directory


app.get('/:id', (req, res) => {
    res.render('person', {
        id: req.params.id,
        query: req.query
    });
});

app.listen(port);