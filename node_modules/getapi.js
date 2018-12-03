var express = require('express');
var app = express();
var fs = require("fs");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host   : 'localhost',
  user   : 'servicio2',
  password : 'servicio2.123',
  database : 'API'
});

 connection.connect();


app.get('/rest/archivos', function (req, res) {
    connection.query('select * from Archivos', function (error, results, fields) {
  if (error) throw error;
  return res.send({error: false, date: results, message: 'Todos list'})
 });
});

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("si salio", host, port)

})


