const {Router} = require('express')

const { getUser, newUser, modificarUser, eliminarUser } = require('../controllers/user')

function users(server){
    const router = Router()
    server.use('/users', router )

    router.get('/getUserList', getUser)

    router.post('/nuevoUsuario', newUser)

    router.put('/modificaUsuario:id', modificarUser)

    router.delete('/eliminaUsuario:id', eliminarUser)
}

module.exports = users