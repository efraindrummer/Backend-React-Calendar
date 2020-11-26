const express = require('express');
require('dotenv').config();

//servidor express
const app = express();

//directorio publico
app.use(express.static('public'));

//Rutas 
/* app.get('/', (req, res) => {
    res.json({
        ok: true
    })
}) */

//escucha peticiones
app.listen(process.env.PORT, () => { 
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});