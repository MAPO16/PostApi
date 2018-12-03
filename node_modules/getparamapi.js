var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host   : 'localhost',
  user   : 'servicio2',
  password : 'servicio2.123',
  database : 'API'
});

 connection.connect();



app.get('/rest/archivos', function (req, res) {
 
 let task_IdArchivo = req.query.IdArchivo

    connection.query('select * from Archivos where Id_Archivo=?', task_IdArchivo,function (error, results, fields) {
  if (error) throw error;
  return res.send({error: false, data: results[0], message: 'Todos list'});

 });

});


  app.listen(8080, function (){
  console.log("si salio port 8080");

});

