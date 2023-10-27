const { Router } = require('express')
const { buscarReserva,
    newReserva,
    eliminarReserva,
    modificarReserva, getReserva } = require('../controllers/reservas')


const reservas = (server) => {
    const router = Router()
    server.use('/reservas', router)
    router.get('/buscarReserv', buscarReserva)
    router.get('/getReservList', getReserva)
    router.post('/crearReserv', newReserva)
    router.put('/modificarReserv/:id', modificarReserva)
    router.delete('/eliminarReserv/:id', eliminarReserva)
}

module.exports = reservas