const express = require('express');
const router = express.Router();
const todoController = require('./todoController');
/*const commentsController = require('./CommentController');*/

//1. 할일 관련 API
router.post('/', todoController.insertTodoList);
router.get('/', todoController.selectTodoList);
router.get('/:todoId', todoController.selectTodoId);
router.put('/:todoId', todoController.updateTodoId);
router.put('/:todoId/complete', todoController.completeTodoId);
router.delete('/:todoId', todoController.deleteTodoId);

/*//2. 댓글 관련 API
router.post('/:todoId/comments', commentsController.insertTodoList);
router.get('/', commentsController.selectTodoList);
router.get('/:todoId', commentsController.selectTodoId);
router.put('/:todoId', commentsController.updateTodoId);
router.put('/:todoId/complete', commentsController.completeTodoId);
router.delete('/:todoId', commentsController.deleteTodoId);*/


module.exports = router;