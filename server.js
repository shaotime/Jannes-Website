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

app.post('/addDescription', (req, res) => {
  const description = {value: req.body.value, id: 1};
  connection.query('REPLACE INTO descrip SET ?', description, (error,results) =>{
    if(error) throw error;
    res.send(results);
    console.log("Description added:" + results);
  });

});

app.get('/getDescription', (req, res) => {
  connection.query('SELECT * FROM descrip', (error, results) => {
    if(error) throw error;
    res.send(results);
    console.log("Current Description: " + results);
  });
});

app.post('/addService', (req, res, next) => {
  const service = {id:req.body.id, name:req.body.name, description: req.body.description, price: req.body.price};
  var queryString = 'INSERT IGNORE INTO service SET ?';
  console.log(service);
  connection.query(queryString, service, (error, results) =>{
    if(error) throw error;
    res.send(results);
    console.log('Last insert service:', results);

  });
});

app.get('/getServices', (req, res) => {
  connection.query('SELECT * FROM service', (error, results) => {
    if(error) throw error;
    res.send(results);
    console.log("Current Services: " + results);
    for (var i in results) {
      console.log(results[i]);
    }
  });
});

app.delete('/deleteService/:id', (req, res) => {
  console.log('Service about to be deleted: ', req.params.id);
  connection.query('DELETE FROM service WHERE id = ?', [req.params.id], (error,results) => {
    if(error) throw error;
    res.send(results);
    console.log('Service deleted: ', req.params.id);
  })

});



app.listen(port, () => console.log(`Listening on port ${port}`));
