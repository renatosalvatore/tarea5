const { Router } = require('express')
const { buscarProducto,
    newProducto,
    eliminarProducto,
    modificarProducto, getProductos } = require('../controllers/ProductosControllers')


const productos = (server) => {
    const router = Router()
    server.use('/productos', router)
    router.get('/buscarProd', buscarProducto)
    router.get('/getProdList', getProductos)
    router.post('/crearProd', newProducto)
    router.put('/modificarProd/:id', modificarProducto)
    router.delete('/eliminarProd/:id', eliminarProducto)
}

module.exports = productos