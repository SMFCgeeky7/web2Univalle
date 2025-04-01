const express = require('express');
const path = require("path");
const app = express();
const port = 3000;


//sericios API

//ejemplo de ruta con / y /ejemplo2ruta

app.get('/', (req, res) => {
    res.send("hello work");
});

app.get('/ejemplo2ruta', (req, res) => {
    res.send("hello workiana");
});

//ruta demo.json

app.get('/api/demojson', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "demo.json"));
});

//ruta educacion.json

app.get('/api/educacionjson', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "educacion.json"));
});

//ruta experiencia_laboral.json

app.get('/api/experiencialaboraljson', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "experiencia_laboral.json"));
});

//ruta habilidades.json

app.get('/api/habilidadesjson', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "habilidades.json"));
});

//ruta presentacion.json

app.get('/api/presentacionjson', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "presentacion.json"));
});

//ruta proyectos.json

app.get('/api/proyectosjson', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "proyectos.json"));
});

app.use(express.static("public"));

app.listen(port, () => {
    console.log("Servidor iniciado en el puerto " + port);
});