let app = require('express')();
let port = process.env.PORT || 3000;

app.get('/person', (req, res) => {
    res.send(`
        <html>
            <head></head>
            <body>
                Hi person.
            </body>
        </html>
    `);
})

app.get('/person/:id', (req, res) => {
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>Person: ${req.params.id}</h1>
            </body>
        </html>
    `);
});

app.listen(port);