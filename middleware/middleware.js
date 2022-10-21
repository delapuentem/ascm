const express = require('express')
const app = express()

// Morgan import
// Middleware de nivel de solicitud HTTP. Es una herramienta que registra las requests
const morgan = require('morgan')
app.use(morgan('dev'))

// Middleware para manejar los datos (entrantes) en el cuerpo de la solicitud (body).
// urlencoded() y json() se necesita para las peticiones PUT y POST.
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Configurar cabeceras y cors para acceder a las peticiones API desde el mismo destino, es decir, desde la propia aplicación
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

module.exports = app