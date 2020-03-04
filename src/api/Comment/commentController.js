const db = require('../../mysql');

//1. 댓글 등록
const insertCommentList = (req, res) => {

    const todoId = parseInt(req.baseUrl.split('/')[2]);

    if (!todoId){
        res.status(400).send('Error')
    }

    const sqlComment = "INSERT INTO comment (todo_id, contents) VALUES(?, ?)";
    db.query(sqlComment, [todoId, req.body.contents], (error, results) => {

    if (error){
       console.log('error occurred', error);
       res.status(500).send('Server Error');
    } else {

       let commentId = results.insertId;
       let returnBody = {
          id : commentId,
          contents : req.body.contents
       };
           res.status(200).send(returnBody);
       }
       });
}

//2. 댓글 목록
const selectCommentList = (req, res) => {

    const todoId = parseInt(req.baseUrl.split('/')[2]);

    if (!todoId){
        res.status(400).send('Error')
    }

    const sqlComment = 'select * from comment where todo_id = ?';
    db.query(sqlComment, [todoId], (error, results) => {
        if (error){
                 console.log('error occurred', error)
                 res.status(500).send('Server Error')
        } else {
                res.send(results);
              }
    });
}

//3. 댓글 읽기
const selectCommentId = (req, res) => {

    const todoId = parseInt(req.baseUrl.split('/')[2]);
    const id = parseInt(req.params.commentsId);

    if (!id && !todoId){
        res.status(400).send('Error')
    }

    const sqlComment = 'select * from comment where todo_id = ? and id = ?';
    db.query(sqlComment, [todoId, id], (error, results) => {
        if (error){
                 console.log('error occurred', error)
                 res.status(500).send('Server Error')
        } else {
                res.send(results[0]);
              }
    });
}

//4. 댓글 수정
const updateCommentId = (req, res) => {

    const todoId = parseInt(req.baseUrl.split('/')[2]);
    const id = parseInt(req.params.commentsId);
    const updateTitle = req.body.contents;

    if (!id && !todoId){
        res.status(400).send('Error')
    }
    const sqlComment = 'UPDATE comment SET contents = ?, updatedAt = now() WHERE todo_id = ? and id = ?';
    db.query(sqlComment, [updateTitle, todoId, id], (error, results) => {
        if (error){
               console.log('error occurred', error)
               res.status(500).send('Server Error')
           } else {
                res.send(req.body);
           }
    });
}

//5. 댓글 삭제
const deleteCommentId = (req, res) => {
    const todoId = parseInt(req.baseUrl.split('/')[2]);
    const id = parseInt(req.params.commentsId);

    if (!id && !todoId){
        res.status(400).send('Error')
    }

    const sqlComment = 'DELETE from comment WHERE todo_id = ? and id = ?';
    db.query(sqlComment, [todoId, id], (error, results) => {
        if (error){
               console.log('error occurred', error)
               res.status(500).send('Server Error')
           } else {

               res.send({"msg": "success"});
           }
    });
}

module.exports = {insertCommentList, selectCommentList, selectCommentId, updateCommentId, deleteCommentId};