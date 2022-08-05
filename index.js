var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

const usersRoute = require('./routes/users');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/users/v1/', usersRoute);

app.listen(8000, function () {
  console.log('Listening to Port 8000');
});

app.use(function (req, res, next) {
  console.log('executed');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});