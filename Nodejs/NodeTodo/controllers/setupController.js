let Todos = require('../models/todoModel');

module.exports = (app) => {

    app.get('/api/setupTodos', (req, res) => {

        // seed database
        let starterTodos = [
            {
                username: 'test',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment: false
            }, {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            }, {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, (err, results) => {

            if (err) throw err;

            res.send(results);
        });

    });
}