const express = require("express");
const app = express();
app.listen(3000, () => {
/*test commit inicial sobre master*/
/*test commit inicial sobre develop*/
app.get('/', function (req, res) {
  res.send('Saludos desde express');
});

app.post('/hola', function (req, res) {
  res.send('[POST]Saludos desde express');
});
app.get('/hola', function (req, res) {
  res.send('[GET]Saludos desde express');
});

 console.log("El servidor está inicializado en el puerto 3000");
});
