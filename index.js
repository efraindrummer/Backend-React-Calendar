const express = require('express');

//servidor express
const app = express();

//Rutas 
app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})

//escucha peticiones
app.listen(4000, () => { 
    console.log(`Servidor corriendo en el puerto ${ 4000 }`);
});