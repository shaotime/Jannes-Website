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

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Shaotime!' });
});

app.post('/addpost', function(req, res, next){
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  var title=req.body.title;
  var subject=req.body.subject;
  var queryString = "INSERT INTO posts (title, subject) VALUES ('title','subject')"; //wtffff this here...
  console.log(title + " and " + subject);

  connection.query(queryString, function(error, results){
    if(error) throw error;
    res.send(results);
  });

  connection.end();
});


app.listen(port, () => console.log(`Listening on port ${port}`));
