const express = require('express');
const router = express.Router();
const commentController = require('./CommentController');

//2. 댓글 관련 API
router.post('/', commentController.insertCommentList);
router.get('/', commentController.selectCommentList);
router.get('/:commentsId', commentController.selectCommentId);
router.put('/:commentsId', commentController.updateCommentId);
router.delete('/:commentsId', commentController.deleteCommentId);

module.exports = router;