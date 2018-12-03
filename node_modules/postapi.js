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


app.post('/rest/archivos',  (req, res, ) => {

   //Body
   var Nombre_del_archivo  = req.body;
   var Fecha_que_se_creo = req.body;
   var Tamaño = req.body;
  
   //Mensaje para mostrar en consola
   console.log(Nombre_del_archivo);
   console.log(Fecha_que_se_creo);
   console.log(Tamaño);

      //conexion
   connection.query('INSERT INTO Archivos SET ?', [Nombre_del_archivo, Fecha_que_se_creo,Tamaño],
  (error, results) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});


app.listen(2108, function () {
 console.log('Node app is running on port 2108');

});