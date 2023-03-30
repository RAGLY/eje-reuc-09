const express = require("express");
const app = express();
const port =process.env.port || 3000;

//para obtener un recurso del servidor
app.get("/",(req, res) => {
    res.send("Hola mundo de los servidores web");
});

app.get("/productos", (req, res) => {
    res.send("Esta seria en teoria la pagina de productos")
});

app.get("*", (req, res) => {
    res.send("404 | Pagina no encontrada");
})
//proceso
app.listen(port, () =>{
    console.log(`El servidor esta corriendo en el puerto http://localhost:3000`)
});
