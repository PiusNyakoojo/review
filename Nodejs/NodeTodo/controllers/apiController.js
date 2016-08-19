let Todos = require('../models/todoModel');

let bodyParser = require('body-parser');

module.exports = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // get all the todos of a specific user
    app.get('/api/todos/:uname', (req, res) => {

        Todos.find({
            username: req.params.uname
        }, (err, todos) => {
            if (err) throw err;

            res.send(todos);
        });
    });

    // get a particular todo by its id
    app.get('/api/todo/:id', (req, res) => {

        Todos.findById({
            _id: req.params.id
        }, (err, todo) => {
            if (err) throw err;

            res.send(todo);
        });
    });

    // add a todo
    app.post('/api/todo', (req, res) => {

        if (req.body.id) { // we assume that this is an update

            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, (err) => {
                if (err) throw err;

                res.send('Successfully updated todo');
            });

        } else { // we assume that this is a new todo
            
            let newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                idDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save((err) => {
                if (err) throw err;

                res.send('Successfully saved new todo');
            });
        }
    });

    // delete a todo
    app.delete('/api/todo', (req, res) => {

        Todos.findByIdAndRemove(req.body.id, (err) => {

            if (err) throw err;

            res.send('Successfully deleted todo');
        });
    });
}