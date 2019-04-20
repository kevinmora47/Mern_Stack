const express = require('express');//Importamos el framework para su uso.
const app = express();//Este es mi servidor.

//Configuraciones
app.set('port', process.env.PORT || 3000);//Setiamos nuestro puerto, en este caso el S.O eligira el puerto o usara por defecto el 3000.




app.listen(app.get('port'),()=>{//Creacion de
   
    console.log(`Servidor en puerto ${app.get('port')}`);
    
});
