const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Shaotime!' });
});

app.post('/addpost', function(req, res){
  var title=req.body.title;
  var subject=req.body.subject;
  console.log(title + " and " + subject);
  if(title && subject){
      res.send('Success');
  }
  else{
    res.send('Failure: empty title/subject');
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
