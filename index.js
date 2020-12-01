const express = require('express');
require('dotenv').config();

//servidor express
const app = express();

//directorio publico
app.use(express.static('public'));

//lectura para parsear el body
app.use(express.json());

//Rutas 
app.use('/api/auth', require('./routes/auth'));
//TODO: creacion de rutas del auth // creacion, login y renocavion del token
//CRUD de los eventos

//escucha peticiones
app.listen(process.env.PORT, () => { 
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});