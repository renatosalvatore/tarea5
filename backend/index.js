require ("dotenv").config()

const producto = require ('./src/routes/Productos')

const auth = require ('./src/routes/auth')

const reserva = require ('./src/routes/reservas')

const users = require ('./src/routes/user')

const express = require('express');
//usamos el frameword de express para REST API
const cors = require('cors');
//usamos cors para permitir conexiones entre distintos dominios
//localhost
const server = express();
//todo lo que esta dentro del server.use es un middleware 
//middleware es una funcion de express
server.use(cors());
//Usamos el middleware de express Json para poder leer los datos
//desde el body

server.use(express.json());

//Ponemos el puerto en una constante
//const PORT = 3000;
const connect = require('./src/config/db')

connect()
//Tercero: Creamos un array de objetos para simular una base de datos

//Verbos o metodos http
/**
 * GET: Obtener datos
 * POST: Crear o realizar un proceso en servidor
 * PUT: Actulizar datos
 * DELETE: Eliminar datos
 */
//Segundo: creamos nuestro endpoint principal
server.get('/', (request, response) => {
    response.send("API V1.0 release 1.0 BackEnd RSML")
})

auth (server)
producto (server)
reserva (server)
users (server)


//Primero : iniciamos el servidor de express con 
server.listen(process.env.PORT, () => {
    console.log("servidor iniciado en el puerto ", process.env.PORT);
})