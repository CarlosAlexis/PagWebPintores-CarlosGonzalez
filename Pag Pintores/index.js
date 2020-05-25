const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
//Se escuchará el puerto 3000
app.listen(3000, () =>{
    console.log('Escuchando el puerto 3000');
});

