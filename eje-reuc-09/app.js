const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Hola Mundo de los Servidores Web");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto http://localhost:${port}`);
});