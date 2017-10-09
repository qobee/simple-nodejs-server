const express = require('express');
const app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening!');
});
