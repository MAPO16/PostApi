const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "API"
});

connection.connect();

app.delete('/rest/archivos', function  (req, res, fn) {
     //Mensaje para mostrar en consola
     console.log(req.body);
        //conexion
   connection.query('DELETE FROM `Archivos` WHERE `Id_Archivo`=?',[req.body.Id_Archivo], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
  });
});

app.listen(3000, function () {
 console.log('Node app is running on port 3000');

});