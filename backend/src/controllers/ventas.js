const mongoose = require ('mongoose')

const ventas = new mongoose.ventasSchema ({

    id : Number,
    producto : String,
    precio : Number,
    cantidad : Number,
    preciototal : Number,
    entrega : String,
    estado : Boolean

})

const Ventas = mogoose.mode ('ventas', ventasSchema)

module.exports = Ventas;