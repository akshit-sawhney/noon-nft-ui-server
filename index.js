var express = require('express');
var app = express();

const usersRoute = require('./routes/users');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/users/v1/', usersRoute);
app.listen(8000, function () {
  console.log('Listening to Port 8000');
});