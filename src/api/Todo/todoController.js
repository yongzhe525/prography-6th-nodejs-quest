const db = require('../../mysql');

//1. 할일 등록
const insertTodoList = (req, res) => {

    const sqlTodo = "INSERT INTO todo (title, description) VALUES(?, ?)";
    const sqlTag = "INSERT INTO tag (todo_id, tags) VALUES (?, ?)";
    let todoId = null;
    db.query(sqlTodo, [req.body.title, req.body.description], (error, results) => {

    if (error){
       console.log('error occurred', error);
       res.status(500).send('Server Error');
    } else {

       todoId = results.insertId;
       let returnBody = {
          id : todoId,
          title : req.body.title,
          description: req.body.description,
          tags: req.body.tags,
       };

       for (let i = 0; i < req.body.tags.length; i++){
       db.query(sqlTag, [todoId, req.body.tags[i]], (error, results) => {
           if (error){
              console.log('error occurred', error);
              res.status(500).send('Server Error');
           }}
       );
       }
           res.status(200).send(returnBody);
       }
       });
}

//2. 할일 목록
const selectTodoList = (req, res) => {

    const sqlTodo = 'SELECT t.*, (SELECT GROUP_CONCAT(s.tags) FROM tag s WHERE s.todo_id = t.id) AS tags FROM todo t';

    db.query(sqlTodo, (error, results) => {
        if (error){
                 console.log('error occurred', error)
                 res.status(500).send('Server Error')
        } else {
                for (let i = 0; i < results.length; i ++){
                    results[i].tags = results[i].tags.split(',');
                }
                res.send(results);
              }
    });
}

//3. 할일 읽기
const selectTodoId = (req, res) => {

    const id = parseInt(req.params.todoId);

    if (!id){
        res.status(400).send('Error')
    }
    const sqlTodo = 'SELECT t.*, (SELECT GROUP_CONCAT(s.tags) FROM tag s WHERE s.todo_id = t.id) AS tags FROM todo t WHERE t.id = ?';
    db.query(sqlTodo, [id], (error, results) => {
        if (error){
               console.log('error occurred', error)
               res.status(500).send('Server Error')
           } else {
             for (let i = 0; i < results.length; i ++){
                 results[i].tags = results[i].tags.split(',');
                 }
                  res.send(results[0]);
                }
    });
}

//4. 할일 수정
const updateTodoId = (req, res) => {

    const id = parseInt(req.params.todoId);
    const updateTitle = req.body.title;

    if (!id){
        res.status(400).send('Error')
    }
    const sqlTodo = 'UPDATE todo SET title = ?, updatedAt = now() WHERE id = ?';
    db.query(sqlTodo, [updateTitle, id], (error, results) => {
        if (error){
               console.log('error occurred', error)
               res.status(500).send('Server Error')
           } else {
                res.send(req.body);
           }
    });
}

//5. 할일 완료
const completeTodoId = (req, res) => {

    const id = parseInt(req.params.todoId);

    if (!id){
            res.status(400).send('Error')
    }
    const sqlTodo = 'UPDATE todo SET isCompleted = true, updatedAt = now() WHERE id = ?';
    db.query(sqlTodo, [id], (error, results) => {
        if (error){
            console.log('error occurred', error)
            res.status(500).send('Server Error')
        } else {

        const sqlSelectTodo = 'SELECT isCompleted from todo WHERE id = ?';
        db.query(sqlSelectTodo, [id], (error, results) => {
                if (error){
                    console.log('error occurred', error)
                    res.status(500).send('Server Error')
                } else {
                   if (results[0].isCompleted)
                       results[0].isCompleted = true
                       else
                       results[0].isCompleted = false
                   res.send(results[0]);
                  }
        });
        }
    });
}

//6. 할일 삭제
const deleteTodoId = (req, res) => {

    const id = parseInt(req.params.todoId);

    if (!id){
        res.status(400).send('Error')
    }
    //const sqlTodo = 'DELETE from todo WHERE id = ?';
    const sqlTodo = 'DELETE td, ta FROM todo td JOIN tag ta ON td.id = ta.todo_id WHERE td.id = ?';
    db.query(sqlTodo, [id], (error, results) => {
        if (error){
               console.log('error occurred', error)
               res.status(500).send('Server Error')
           } else {

               res.send({"msg": "success"});
           }
    });
}

module.exports = {insertTodoList, selectTodoList, selectTodoId, updateTodoId, completeTodoId, deleteTodoId};