const express = require('express');
const router = express.Router();
const todoController = require('./todoController');

//1. 할일 관련 API
router.post('/', todoController.insertTodoList);
router.get('/', todoController.selectTodoList);
router.get('/:todoId', todoController.selectTodoId);
router.put('/:todoId', todoController.updateTodoId);
router.put('/:todoId/complete', todoController.completeTodoId);
router.delete('/:todoId', todoController.deleteTodoId);

module.exports = router;