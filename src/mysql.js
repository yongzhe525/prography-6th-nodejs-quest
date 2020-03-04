const mysql = require('mysql');
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sqlTod = "CREATE TABLE IF NOT EXISTS todo (id int(11) NOT NULL AUTO_INCREMENT, title varchar(20) DEFAULT NULL, description varchar(200) DEFAULT NULL, isCompleted boolean NOT NULL DEFAULT false, createdAt datetime DEFAULT now(), updatedAt datetime DEFAULT now(), PRIMARY KEY (id));";
  var sqlTag = "CREATE TABLE IF NOT EXISTS tag (id int(11) NOT NULL AUTO_INCREMENT, todo_id int(11) NOT NULL, tags varchar(20) DEFAULT NULL, PRIMARY KEY (id));";
  var sqlComment = "CREATE TABLE IF NOT EXISTS comment ( id int(11) NOT NULL AUTO_INCREMENT, todo_id int(11) NOT NULL, contents varchar(200) DEFAULT NULL, createdAt datetime DEFAULT now(), updatedAt datetime DEFAULT now(), PRIMARY KEY (id));";

  //1. initial create table of todo
  db.query( sqlTod, function (err, result) {
    if (err) throw err;

      //2. initial create table of tag
      db.query( sqlTag, function (err, result) {
        if (err) throw err;

        //3. initial create table of comment
        db.query( sqlComment, function (err, result) {
                if (err) throw err;
              });
      });
  });
});

module.exports = db;