const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'djshaotime',
  database : 'jannesDB'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getPost', (req, res) => {

  connection.query('SELECT * FROM posts', (error, results) => {
    if(error) throw error;
    res.send(results);
    console.log("Current Posts: " + results);
    for (var i in results) {
      console.log(results[i]);
    }
  });

});

app.post('/addPost', (req, res, next) => {

  const post = { title: req.body.title, subject: req.body.subject };
  var queryString = 'INSERT INTO posts SET ?';
  console.log(post);

  connection.query(queryString, post, (error, results) =>{
    if(error) throw error;
    res.send(results);
    console.log('Last insert post:', results);
    console.log("ID OF INSERTED:" + results.insertId);
  });
});

app.delete('/deletePost/:id', (req, res) => {
  console.log('Post about to be deleted: ', req.params.id);
  connection.query('DELETE FROM posts WHERE id = ?', [req.params.id], (error,results) => {
    if(error) throw error;
    res.send(results);
    console.log('Post deleted: ', req.params.id);
  })

});




app.listen(port, () => console.log(`Listening on port ${port}`));
