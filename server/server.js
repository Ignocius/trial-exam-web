'use strict';

var express = require('express');
var bodyParser = require('body-parser')
var mysql = require('mysql');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
      host     : 'localhost',
      user     : "'root'",
      password : 'admin',
      database : 'caesarcipher'
});
connection.connect();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/decode/all', function (req, res) {
  connection.query('SELECT * FROM cipher', function(err, rows, fields){
    if (err) {
      throw err;
    } else {
      res.send(rows);
    }
  })
});


app.post("/decode", function decode (req, res) {
  connection.query({
  		sql: 'INSERT INTO cipher(shift, text) VALUES(?, ?)',
  		values: [ req.body.shift, req.body.text]
  	}, function(err, rows, fields) {
  		if (err) throw err;
    	res.send(rows);
    });
});

app.listen(3500, function(){
	console.log('SERVER IS UP AND RUNNIN on port: 3500')
});
