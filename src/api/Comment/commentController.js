const db = require('../../mysql');

//1. 댓글 등록
const insertCommentList = (req, res) => {
    const sql = 'SELECT * FROM topic';
    db.query(sql, (error, results) => {
       if (error){
          console.log('error occurred', error)
          res.send({
                    "code": 400,
                    "failed": "error occurred"
                 })
       }
       else {

         console.log('The topic is:', results);
         res.send(results);
       }
    });
}


//2. 댓글 목록
const selectCommentList = (req, res) => {
    const sql = 'SELECT * FROM topic';
    db.query(sql, (error, results) => {
       if (error){
          console.log('error occurred', error)
          res.send({
                    "code": 400,
                    "failed": "error occurred"
                 })
       }
       else {

         console.log('The topic is:', results);
         res.send(results);
       }
    });
}

//3. 댓글 읽기
const selectCommentId = (req, res) => {
    const sql = 'SELECT * FROM topic';
    db.query(sql, (error, results) => {
       if (error){
          console.log('error occurred', error)
          res.send({
                    "code": 400,
                    "failed": "error occurred"
                 })
       }
       else {

         console.log('The topic is:', results);
         res.send(results);
       }
    });
}

//4. 댓글 수정
const updateCommentId = (req, res) => {
    const sql = 'SELECT * FROM topic';
    db.query(sql, (error, results) => {
       if (error){
          console.log('error occurred', error)
          res.send({
                    "code": 400,
                    "failed": "error occurred"
                 })
       }
       else {

         console.log('The topic is:', results);
         res.send(results);
       }
    });
}

//5. 댓글 삭제
const deleteCommentId = (req, res) => {
    const sql = 'SELECT * FROM topic';
    db.query(sql, (error, results) => {
       if (error){
          console.log('error occurred', error)
          res.send({
                    "code": 400,
                    "failed": "error occurred"
                 })
       }
       else {

         console.log('The topic is:', results);
         res.send(results);
       }
    });
}

module.exports = {insertCommentList, selectCommentList, selectCommentId, updateCommentId, deleteCommentId};