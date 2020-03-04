const express = require('express');
const bodyParser = require('body-parser');

const todo = require('./api/Todo/todo');
const comment = require('./api/Comment/comment');

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/todos', todo);
app.use('/todos/:todoId/comments', comment);

export default app;
