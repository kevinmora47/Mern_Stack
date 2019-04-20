const express = require("express"); //Importamos el framework para su uso.
const morgan = require("morgan");
const path = require("path");
const app = express(); //Este es mi servidor.

//Configuraciones
app.set("port", process.env.PORT || 3000); //Setiamos nuestro puerto, en este caso el S.O eligira el puerto o usara por defecto el 3000.

//MiddleWares
app.use(morgan("dev"));
app.use(express.json());

//Rutas
app.use("/api/tasks", require("./routes/task.routes"));

//Archivos Estaticos
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  //Creacion de nuestro puerto

  console.log(`Servidor en puerto ${app.get("port")}`);
});
