const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

//servidor express
const app = express();

//conectar base de datso mongo
dbConnection();

//CORS
app.use(cors());

//directorio publico
app.use(express.static('public'));

//lectura para parsear el body
app.use(express.json());

//Rutas 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
//TODO: creacion de rutas del auth // creacion, login y renocavion del token
//CRUD de los eventos

//escucha peticiones
app.listen(process.env.PORT, () => { 
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});