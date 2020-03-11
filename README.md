# Api Rest con NodeJs y Express

## Creación de la aplicación
La aplicación fue creada mediante npm init,  sin embargo es posible crearla escribiendo a mano el archivo package.json. 

## Pre requisitos
Es necesario instalar nodejs y express.  para ello se deben seguir los siguientes pasos:
1. NODE JS: Descargar instalador desde  https://nodejs.org/es/
2. Una vez instalado nodejs mediante npm instalamos express con ``sudo npm install -g express ``.

## Iniciar app

Vamos a comenzar creando la carpeta que contendra nuestra aplicación, para ello hacemos mkdir <nombreCarpeta>. A continuación nos posicionamos en ella cd <nombreCarpeta>
Una vez dentro daremos inicio a la aplicación. Se debe escribir ```npm init``, claro está, asumiendo que se tiene instalado node y npm. 
A continuación solicitará algunos datos para su creación como package, autor, repositorio, entre otros, destacando el archivo de inicio (entrey point). Este archivo es necesario definirlo ya que lo utilizaremos a continuación.


Una vez creado el package.json vamos a crear el archivo identificado en el paso anterior como "entry point" de la siguiente manera ''' vi index.js``` (en mi caso).
En el cuerpo del archivo agregamos lo siguiente: 

```
const express = require("express");
const app = express();
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

```

Realizado esto, en consola escribimos ```node index.js``` y nos levantará la aplicación escuchando en el puerto 3000 por lo que accederemos ingresando localhost:3000

En el código se definen ademas 3 rutas para probar servicios por defecto ("/"), un servicio get nombrado ("/hola") y otro post nombrado ("/hola").

Fuentes: http://expressjs.com
